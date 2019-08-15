import { _ListOfString } from "./_ListOfString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportApiKeysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ids: {
      shape: _ListOfString
    },
    warnings: {
      shape: _ListOfString
    }
  }
};
