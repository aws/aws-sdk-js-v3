import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateServiceSpecificCredentialInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "ServiceName"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceName: {
      shape: {
        type: "string"
      }
    }
  }
};
