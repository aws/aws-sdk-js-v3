import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateAddressInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationId: {
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
