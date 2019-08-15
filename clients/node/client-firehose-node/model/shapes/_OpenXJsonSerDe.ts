import { _ColumnToJsonKeyMappings } from "./_ColumnToJsonKeyMappings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OpenXJsonSerDe: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConvertDotsInJsonKeysToUnderscores: {
      shape: {
        type: "boolean"
      }
    },
    CaseInsensitive: {
      shape: {
        type: "boolean"
      }
    },
    ColumnToJsonKeyMappings: {
      shape: _ColumnToJsonKeyMappings
    }
  }
};
