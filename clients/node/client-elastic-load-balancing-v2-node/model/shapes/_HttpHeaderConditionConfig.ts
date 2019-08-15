import { _ListOfString } from "./_ListOfString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HttpHeaderConditionConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HttpHeaderName: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _ListOfString
    }
  }
};
