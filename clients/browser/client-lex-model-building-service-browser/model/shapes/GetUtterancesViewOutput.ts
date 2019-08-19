import { _ListsOfUtterances } from "./_ListsOfUtterances";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUtterancesViewOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    botName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    utterances: {
      shape: _ListsOfUtterances
    }
  }
};
