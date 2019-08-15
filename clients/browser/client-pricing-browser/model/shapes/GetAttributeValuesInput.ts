import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAttributeValuesInput: _Structure_ = {
  type: "structure",
  required: ["ServiceCode", "AttributeName"],
  members: {
    ServiceCode: {
      shape: {
        type: "string"
      }
    },
    AttributeName: {
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
