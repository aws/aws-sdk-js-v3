import { _GetConnectionsFilter } from "./_GetConnectionsFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConnectionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Filter: {
      shape: _GetConnectionsFilter
    },
    HidePassword: {
      shape: {
        type: "boolean"
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
