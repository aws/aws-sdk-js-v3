import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAcceleratorInput: _Structure_ = {
  type: "structure",
  required: ["Name", "IdempotencyToken"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    IpAddressType: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    IdempotencyToken: {
      shape: {
        type: "string"
      }
    }
  }
};
