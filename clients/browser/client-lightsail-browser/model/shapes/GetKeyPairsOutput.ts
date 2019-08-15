import { _KeyPairList } from "./_KeyPairList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetKeyPairsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    keyPairs: {
      shape: _KeyPairList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
