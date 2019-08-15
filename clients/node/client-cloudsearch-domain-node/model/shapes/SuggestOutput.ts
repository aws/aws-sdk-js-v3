import { _SuggestStatus } from "./_SuggestStatus";
import { _SuggestModel } from "./_SuggestModel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SuggestOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: _SuggestStatus
    },
    suggest: {
      shape: _SuggestModel
    }
  }
};
