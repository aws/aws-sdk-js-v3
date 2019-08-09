import { _SpotInstanceStateFault } from "./_SpotInstanceStateFault";
import { _LaunchSpecification } from "./_LaunchSpecification";
import { _SpotInstanceStatus } from "./_SpotInstanceStatus";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpotInstanceRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActualBlockHourlyPrice: {
      shape: {
        type: "string"
      },
      locationName: "actualBlockHourlyPrice"
    },
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
    CreateTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "createTime"
    },
    Fault: {
      shape: _SpotInstanceStateFault,
      locationName: "fault"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    LaunchGroup: {
      shape: {
        type: "string"
      },
      locationName: "launchGroup"
    },
    LaunchSpecification: {
      shape: _LaunchSpecification,
      locationName: "launchSpecification"
    },
    LaunchedAvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "launchedAvailabilityZone"
    },
    ProductDescription: {
      shape: {
        type: "string"
      },
      locationName: "productDescription"
    },
    SpotInstanceRequestId: {
      shape: {
        type: "string"
      },
      locationName: "spotInstanceRequestId"
    },
    SpotPrice: {
      shape: {
        type: "string"
      },
      locationName: "spotPrice"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Status: {
      shape: _SpotInstanceStatus,
      locationName: "status"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
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
      },
      locationName: "instanceInterruptionBehavior"
    }
  }
};
