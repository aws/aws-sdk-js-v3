import { Route53 } from "@aws-sdk/client-route-53";
import { describe, expect, test as it, beforeAll } from "vitest";

describe("route53-error-structure", () => {
  let error: (Error & any) | undefined;

  beforeAll(async () => {
    const r53 = new Route53({ region: "us-west-2" });
    error = await r53
      .changeResourceRecordSets({
        HostedZoneId: "test",
        ChangeBatch: {
          Changes: [],
        },
      })
      .catch((_) => _);
  });

  it("should have Type and Code at error root level", async () => {
    expect(error.Type).toEqual("Sender");
    expect(error.Code).toEqual("NoSuchHostedZone");

    expect(error.Error).toEqual({
      Code: "NoSuchHostedZone",
      Message: "No hosted zone found with ID: test",
      Type: "Sender",
    });
  });

  it("should have descriptive message taken from ErrorResponse.Error.Message", async () => {
    expect(error.name).toEqual("NoSuchHostedZone");
    expect(error.message).toEqual("No hosted zone found with ID: test");

    expect(error).toMatchObject({
      $fault: "client",
      $retryable: undefined,
    });
    expect(error.$metadata).toMatchObject({
      httpStatusCode: 404,
    });
  });
});
