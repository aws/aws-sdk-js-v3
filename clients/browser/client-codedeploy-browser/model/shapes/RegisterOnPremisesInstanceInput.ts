import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterOnPremisesInstanceInput: _Structure_ = {
  type: "structure",
  required: ["instanceName"],
  members: {
    instanceName: {
      shape: {
        type: "string"
      }
    },
    iamSessionArn: {
      shape: {
        type: "string"
      }
    },
    iamUserArn: {
      shape: {
        type: "string"
      }
    }
  }
};
