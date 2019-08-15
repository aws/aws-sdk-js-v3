import { _Spend } from "./_Spend";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CalculatedSpend: _Structure_ = {
  type: "structure",
  required: ["ActualSpend"],
  members: {
    ActualSpend: {
      shape: _Spend
    },
    ForecastedSpend: {
      shape: _Spend
    }
  }
};
