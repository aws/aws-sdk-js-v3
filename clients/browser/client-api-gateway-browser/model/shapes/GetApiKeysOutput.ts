import { _ListOfString } from "./_ListOfString";
import { _ListOfApiKey } from "./_ListOfApiKey";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApiKeysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    warnings: {
      shape: _ListOfString
    },
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfApiKey,
      locationName: "item"
    }
  }
};
