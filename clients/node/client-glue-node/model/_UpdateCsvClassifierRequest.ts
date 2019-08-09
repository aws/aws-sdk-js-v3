import { _CsvHeader } from "./_CsvHeader";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateCsvClassifierRequest: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Delimiter: {
      shape: {
        type: "string",
        min: 1
      }
    },
    QuoteSymbol: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ContainsHeader: {
      shape: {
        type: "string"
      }
    },
    Header: {
      shape: _CsvHeader
    },
    DisableValueTrimming: {
      shape: {
        type: "boolean"
      }
    },
    AllowSingleColumn: {
      shape: {
        type: "boolean"
      }
    }
  }
};
