import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserDefinedFunctionsInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "Pattern"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DatabaseName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Pattern: {
      shape: {
        type: "string",
        min: 1
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
