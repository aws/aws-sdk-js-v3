import { _ParameterStringFilterList } from "./_ParameterStringFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetParametersByPathInput: _Structure_ = {
  type: "structure",
  required: ["Path"],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Recursive: {
      shape: {
        type: "boolean"
      }
    },
    ParameterFilters: {
      shape: _ParameterStringFilterList
    },
    WithDecryption: {
      shape: {
        type: "boolean"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
