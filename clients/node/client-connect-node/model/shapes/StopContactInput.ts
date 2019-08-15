import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopContactInput: _Structure_ = {
  type: "structure",
  required: ["ContactId", "InstanceId"],
  members: {
    ContactId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
