import { _DatasetContentVersionValue } from "./_DatasetContentVersionValue";
import { _OutputFileUriValue } from "./_OutputFileUriValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Variable: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    stringValue: {
      shape: {
        type: "string"
      }
    },
    doubleValue: {
      shape: {
        type: "float"
      }
    },
    datasetContentVersionValue: {
      shape: _DatasetContentVersionValue
    },
    outputFileUriValue: {
      shape: _OutputFileUriValue
    }
  }
};
