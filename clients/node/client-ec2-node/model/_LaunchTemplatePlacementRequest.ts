import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplatePlacementRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    Affinity: {
      shape: {
        type: "string"
      }
    },
    GroupName: {
      shape: {
        type: "string"
      }
    },
    HostId: {
      shape: {
        type: "string"
      }
    },
    Tenancy: {
      shape: {
        type: "string"
      }
    },
    SpreadDomain: {
      shape: {
        type: "string"
      }
    }
  }
};
