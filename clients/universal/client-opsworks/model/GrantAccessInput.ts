import { Structure as _Structure_ } from "@aws-sdk/types";

export const GrantAccessInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    ValidForInMinutes: {
      shape: {
        type: "integer",
        min: 60
      }
    }
  }
};
