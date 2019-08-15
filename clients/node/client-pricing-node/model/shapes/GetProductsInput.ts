import { _Filters } from "./_Filters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetProductsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceCode: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _Filters
    },
    FormatVersion: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
