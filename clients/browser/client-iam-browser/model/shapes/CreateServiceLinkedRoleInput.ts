import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateServiceLinkedRoleInput: _Structure_ = {
  type: "structure",
  required: ["AWSServiceName"],
  members: {
    AWSServiceName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    CustomSuffix: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
