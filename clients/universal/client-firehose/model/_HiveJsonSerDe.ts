import { _ListOfNonEmptyStrings } from "./_ListOfNonEmptyStrings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HiveJsonSerDe: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TimestampFormats: {
      shape: _ListOfNonEmptyStrings
    }
  }
};
