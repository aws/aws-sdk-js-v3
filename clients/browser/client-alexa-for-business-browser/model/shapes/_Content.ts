import { _TextList } from "./_TextList";
import { _SsmlList } from "./_SsmlList";
import { _AudioList } from "./_AudioList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Content: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TextList: {
      shape: _TextList
    },
    SsmlList: {
      shape: _SsmlList
    },
    AudioList: {
      shape: _AudioList
    }
  }
};
