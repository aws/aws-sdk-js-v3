import { _CaptionSources } from "./_CaptionSources";
import { _CaptionFormats } from "./_CaptionFormats";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Captions: _Structure_ = {
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
    },
    CaptionFormats: {
      shape: _CaptionFormats
    }
  }
};
