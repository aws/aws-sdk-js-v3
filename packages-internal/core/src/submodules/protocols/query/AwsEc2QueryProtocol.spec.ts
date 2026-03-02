import { describe, expect, test as it } from "vitest";

import { AwsEc2QueryProtocol } from "./AwsEc2QueryProtocol";

describe("AwsEc2QueryProtocol", () => {
  it("should have a shapeId of aws.protocols.ec2Query", () => {
    const protocol = new AwsEc2QueryProtocol({
      defaultNamespace: "",
      version: "",
      xmlNamespace: "",
    });

    expect(protocol.getShapeId()).toEqual("aws.protocols#ec2Query");
  });
});
