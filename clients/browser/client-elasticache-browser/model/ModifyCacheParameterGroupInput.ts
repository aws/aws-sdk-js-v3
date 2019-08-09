import { _ParameterNameValueList } from "./_ParameterNameValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyCacheParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["CacheParameterGroupName", "ParameterNameValues"],
  members: {
    CacheParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    ParameterNameValues: {
      shape: _ParameterNameValueList
    }
  }
};
