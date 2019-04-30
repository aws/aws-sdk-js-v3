import { _GlobalTableDescription } from "./_GlobalTableDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGlobalTableOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GlobalTableDescription: {
      shape: _GlobalTableDescription
    }
  }
};
