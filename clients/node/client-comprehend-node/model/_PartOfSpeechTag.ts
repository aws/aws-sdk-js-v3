import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PartOfSpeechTag: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tag: {
      shape: {
        type: "string"
      }
    },
    Score: {
      shape: {
        type: "float"
      }
    }
  }
};
