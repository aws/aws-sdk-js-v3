import { Map as _Map_ } from "@aws-sdk/types";
import { _ExecutionParameterValueList } from "./_ExecutionParameterValueList";

export const _ExecutionParameterMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _ExecutionParameterValueList
  }
};
