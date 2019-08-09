import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestIdentityProviderOutput: _Structure_ = {
  type: "structure",
  required: ["StatusCode", "Url"],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    StatusCode: {
      shape: {
        type: "integer"
      }
    },
    Url: {
      shape: {
        type: "string"
      }
    }
  }
};
