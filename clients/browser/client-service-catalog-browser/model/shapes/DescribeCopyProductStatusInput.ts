import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCopyProductStatusInput: _Structure_ = {
  type: "structure",
  required: ["CopyProductToken"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    CopyProductToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
