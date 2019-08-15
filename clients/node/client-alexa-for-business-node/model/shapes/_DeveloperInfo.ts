import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeveloperInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeveloperName: {
      shape: {
        type: "string"
      }
    },
    PrivacyPolicy: {
      shape: {
        type: "string"
      }
    },
    Email: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Url: {
      shape: {
        type: "string"
      }
    }
  }
};
