import { _Destination } from "./_Destination";
import { _MessageTagList } from "./_MessageTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BulkEmailDestination: _Structure_ = {
  type: "structure",
  required: ["Destination"],
  members: {
    Destination: {
      shape: _Destination
    },
    ReplacementTags: {
      shape: _MessageTagList
    },
    ReplacementTemplateData: {
      shape: {
        type: "string"
      }
    }
  }
};
