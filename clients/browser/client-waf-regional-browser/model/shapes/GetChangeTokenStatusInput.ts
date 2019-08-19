import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetChangeTokenStatusInput: _Structure_ = {
  type: "structure",
  required: ["ChangeToken"],
  members: {
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
