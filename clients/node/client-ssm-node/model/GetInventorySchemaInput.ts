import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInventorySchemaInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TypeName: {
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
        min: 50
      }
    },
    Aggregator: {
      shape: {
        type: "boolean"
      }
    },
    SubType: {
      shape: {
        type: "boolean"
      }
    }
  }
};
