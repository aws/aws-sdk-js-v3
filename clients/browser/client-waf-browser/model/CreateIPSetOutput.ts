import { _IPSet } from "./_IPSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateIPSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IPSet: {
      shape: _IPSet
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
