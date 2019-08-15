import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServiceActionInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    }
  }
};
