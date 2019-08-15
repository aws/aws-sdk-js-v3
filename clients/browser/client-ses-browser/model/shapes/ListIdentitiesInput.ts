import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIdentitiesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityType: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxItems: {
      shape: {
        type: "integer"
      }
    }
  }
};
