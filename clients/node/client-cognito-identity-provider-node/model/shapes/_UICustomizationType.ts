import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UICustomizationType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientId: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    ImageUrl: {
      shape: {
        type: "string"
      }
    },
    CSS: {
      shape: {
        type: "string"
      }
    },
    CSSVersion: {
      shape: {
        type: "string"
      }
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
