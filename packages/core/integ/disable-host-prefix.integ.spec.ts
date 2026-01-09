import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { Location } from "@aws-sdk/client-location";
import { describe, test as it } from "vitest";

describe("disableHostPrefix", () => {
  const region = "us-west-2";

  it("should have a host prefix", async () => {
    const loc = new Location({
      region,
      credentials: {
        accessKeyId: "INTEG",
        secretAccessKey: "INTEG",
      },
      disableHostPrefix: false,
    });
    requireRequestsFrom(loc).toMatch({
      hostname: `geofencing.geo.${region}.amazonaws.com`,
    });
    await loc.listGeofences();
  });

  it("should allow disabling host prefix", async () => {
    const loc = new Location({
      region,
      credentials: {
        accessKeyId: "INTEG",
        secretAccessKey: "INTEG",
      },
      disableHostPrefix: true,
    });
    requireRequestsFrom(loc).toMatch({
      hostname: `geo.${region}.amazonaws.com`,
    });
    await loc.listGeofences();
  });
});
