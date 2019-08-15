import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReleaseAddressInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllocationId: {
      shape: {
        type: "string"
      }
    },
    PublicIp: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
