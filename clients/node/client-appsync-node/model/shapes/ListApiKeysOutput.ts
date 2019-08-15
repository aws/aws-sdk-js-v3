import { _ApiKeys } from "./_ApiKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApiKeysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    apiKeys: {
      shape: _ApiKeys
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
