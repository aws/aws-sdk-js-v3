import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GivenName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Surname: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EmailAddress: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
