import { Structure as _Structure_ } from "@aws-sdk/types";

export const PublishVersionInput: _Structure_ = {
  type: "structure",
  required: ["FunctionName"],
  members: {
    FunctionName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "FunctionName"
    },
    CodeSha256: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    RevisionId: {
      shape: {
        type: "string"
      }
    }
  }
};
