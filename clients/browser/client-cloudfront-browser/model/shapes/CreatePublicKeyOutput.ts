import { _PublicKey } from "./_PublicKey";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePublicKeyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PublicKey: {
      shape: _PublicKey
    },
    Location: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Location"
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "PublicKey"
};
