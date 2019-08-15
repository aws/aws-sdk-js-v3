import { Map as _Map_ } from "@aws-sdk/types";
import { _ListOfString } from "./_ListOfString";

export const _MapOfStringToList: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _ListOfString
  }
};
