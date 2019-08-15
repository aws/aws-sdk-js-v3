import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserPoolClientDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientId: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
