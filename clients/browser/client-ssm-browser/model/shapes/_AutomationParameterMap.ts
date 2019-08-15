import { Map as _Map_ } from "@aws-sdk/types";
import { _AutomationParameterValueList } from "./_AutomationParameterValueList";

export const _AutomationParameterMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _AutomationParameterValueList
  }
};
