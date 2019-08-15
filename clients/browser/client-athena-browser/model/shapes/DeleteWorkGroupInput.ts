import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteWorkGroupInput: _Structure_ = {
  type: "structure",
  required: ["WorkGroup"],
  members: {
    WorkGroup: {
      shape: {
        type: "string"
      }
    },
    RecursiveDeleteOption: {
      shape: {
        type: "boolean"
      }
    }
  }
};
