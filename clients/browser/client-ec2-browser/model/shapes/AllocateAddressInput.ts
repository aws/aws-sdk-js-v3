import { Structure as _Structure_ } from "@aws-sdk/types";

export const AllocateAddressInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Domain: {
      shape: {
        type: "string"
      }
    },
    Address: {
      shape: {
        type: "string"
      }
    },
    PublicIpv4Pool: {
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
