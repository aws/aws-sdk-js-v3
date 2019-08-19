import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElastiCacheInstanceDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Family: {
      shape: {
        type: "string"
      }
    },
    NodeType: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    ProductDescription: {
      shape: {
        type: "string"
      }
    },
    CurrentGeneration: {
      shape: {
        type: "boolean"
      }
    },
    SizeFlexEligible: {
      shape: {
        type: "boolean"
      }
    }
  }
};
