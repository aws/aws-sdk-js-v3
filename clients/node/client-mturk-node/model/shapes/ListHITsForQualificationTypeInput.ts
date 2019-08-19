import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListHITsForQualificationTypeInput: _Structure_ = {
  type: "structure",
  required: ["QualificationTypeId"],
  members: {
    QualificationTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
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
