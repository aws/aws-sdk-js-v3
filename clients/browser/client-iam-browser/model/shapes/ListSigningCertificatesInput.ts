import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSigningCertificatesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
