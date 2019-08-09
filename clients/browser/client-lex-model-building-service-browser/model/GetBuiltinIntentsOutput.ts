import { _BuiltinIntentMetadataList } from "./_BuiltinIntentMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBuiltinIntentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    intents: {
      shape: _BuiltinIntentMetadataList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
