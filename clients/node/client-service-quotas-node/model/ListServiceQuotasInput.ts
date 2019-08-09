import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServiceQuotasInput: _Structure_ = {
  type: "structure",
  required: ["ServiceCode"],
  members: {
    ServiceCode: {
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
