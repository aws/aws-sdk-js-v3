import { List as _List_ } from "@aws-sdk/types";
import { _MinimumEngineVersionPerAllowedValue } from "./_MinimumEngineVersionPerAllowedValue";

export const _MinimumEngineVersionPerAllowedValueList: _List_ = {
  type: "list",
  member: {
    shape: _MinimumEngineVersionPerAllowedValue,
    locationName: "MinimumEngineVersionPerAllowedValue"
  }
};
