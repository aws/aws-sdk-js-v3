import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPartnerEventSourcesInput: _Structure_ = {
  type: "structure",
  required: ["NamePrefix"],
  members: {
    NamePrefix: {
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
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
