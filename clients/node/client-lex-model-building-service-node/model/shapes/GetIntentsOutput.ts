import { _IntentMetadataList } from "./_IntentMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIntentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    intents: {
      shape: _IntentMetadataList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
