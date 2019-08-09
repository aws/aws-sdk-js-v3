import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SalesforceAction: _Structure_ = {
  type: "structure",
  required: ["token", "url"],
  members: {
    token: {
      shape: {
        type: "string",
        min: 40
      }
    },
    url: {
      shape: {
        type: "string"
      }
    }
  }
};
