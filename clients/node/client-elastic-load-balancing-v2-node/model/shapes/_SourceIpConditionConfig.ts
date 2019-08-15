import { _ListOfString } from "./_ListOfString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceIpConditionConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Values: {
      shape: _ListOfString
    }
  }
};
