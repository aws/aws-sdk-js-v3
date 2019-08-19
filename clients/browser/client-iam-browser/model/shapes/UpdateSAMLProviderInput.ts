import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSAMLProviderInput: _Structure_ = {
  type: "structure",
  required: ["SAMLMetadataDocument", "SAMLProviderArn"],
  members: {
    SAMLMetadataDocument: {
      shape: {
        type: "string",
        min: 1000
      }
    },
    SAMLProviderArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
