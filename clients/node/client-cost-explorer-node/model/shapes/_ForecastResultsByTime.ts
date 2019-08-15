import { List as _List_ } from "@aws-sdk/types";
import { _ForecastResult } from "./_ForecastResult";

export const _ForecastResultsByTime: _List_ = {
  type: "list",
  member: {
    shape: _ForecastResult
  }
};
