import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetChangeTokenOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
