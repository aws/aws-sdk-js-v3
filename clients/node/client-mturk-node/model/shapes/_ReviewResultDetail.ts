import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReviewResultDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SubjectId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SubjectType: {
      shape: {
        type: "string"
      }
    },
    QuestionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Key: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    }
  }
};
