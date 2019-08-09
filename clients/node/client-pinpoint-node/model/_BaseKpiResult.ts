import { _ListOfResultRow } from "./_ListOfResultRow";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BaseKpiResult: _Structure_ = {
  type: "structure",
  required: ["Rows"],
  members: {
    Rows: {
      shape: _ListOfResultRow
    }
  }
};
