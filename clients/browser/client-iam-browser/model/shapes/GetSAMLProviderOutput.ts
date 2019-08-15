import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSAMLProviderOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SAMLMetadataDocument: {
      shape: {
        type: "string",
        min: 1000
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    ValidUntil: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
