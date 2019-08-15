import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["ParameterGroupName"],
  members: {
    ParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
