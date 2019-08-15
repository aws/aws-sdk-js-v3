import { _Segment } from "./_Segment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPartitionsInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "TableName"],
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
    TableName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Expression: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Segment: {
      shape: _Segment
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
