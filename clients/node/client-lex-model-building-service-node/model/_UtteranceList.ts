import { _ListOfUtterance } from "./_ListOfUtterance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UtteranceList: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    botVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    utterances: {
      shape: _ListOfUtterance
    }
  }
};
