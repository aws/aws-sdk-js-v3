import { _RequestSpotLaunchSpecification } from "./_RequestSpotLaunchSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RequestSpotInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZoneGroup: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZoneGroup"
    },
    BlockDurationMinutes: {
      shape: {
        type: "integer"
      },
      locationName: "blockDurationMinutes"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    InstanceCount: {
      shape: {
        type: "integer"
      },
      locationName: "instanceCount"
    },
    LaunchGroup: {
      shape: {
        type: "string"
      },
      locationName: "launchGroup"
    },
    LaunchSpecification: {
      shape: _RequestSpotLaunchSpecification
    },
    SpotPrice: {
      shape: {
        type: "string"
      },
      locationName: "spotPrice"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    },
    ValidFrom: {
      shape: {
        type: "timestamp"
      },
      locationName: "validFrom"
    },
    ValidUntil: {
      shape: {
        type: "timestamp"
      },
      locationName: "validUntil"
    },
    InstanceInterruptionBehavior: {
      shape: {
        type: "string"
      }
    }
  }
};
