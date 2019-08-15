import { _CaptionSources } from "./_CaptionSources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputCaptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MergePolicy: {
      shape: {
        type: "string"
      }
    },
    CaptionSources: {
      shape: _CaptionSources
    }
  }
};
