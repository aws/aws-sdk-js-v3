import { _ParameterNameValueList } from "./_ParameterNameValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetCacheParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["CacheParameterGroupName"],
  members: {
    CacheParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    ResetAllParameters: {
      shape: {
        type: "boolean"
      }
    },
    ParameterNameValues: {
      shape: _ParameterNameValueList
    }
  }
};
