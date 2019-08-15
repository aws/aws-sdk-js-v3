import { _ListOfResultRowValue } from "./_ListOfResultRowValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResultRow: _Structure_ = {
  type: "structure",
  required: ["GroupedBys", "Values"],
  members: {
    GroupedBys: {
      shape: _ListOfResultRowValue
    },
    Values: {
      shape: _ListOfResultRowValue
    }
  }
};
