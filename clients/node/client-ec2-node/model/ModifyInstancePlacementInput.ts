import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyInstancePlacementInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    Affinity: {
      shape: {
        type: "string"
      },
      locationName: "affinity"
    },
    GroupName: {
      shape: {
        type: "string"
      }
    },
    HostId: {
      shape: {
        type: "string"
      },
      locationName: "hostId"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    Tenancy: {
      shape: {
        type: "string"
      },
      locationName: "tenancy"
    },
    PartitionNumber: {
      shape: {
        type: "integer"
      }
    }
  }
};
