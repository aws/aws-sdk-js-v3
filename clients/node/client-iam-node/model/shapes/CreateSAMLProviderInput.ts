import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSAMLProviderInput: _Structure_ = {
  type: "structure",
  required: ["SAMLMetadataDocument", "Name"],
  members: {
    SAMLMetadataDocument: {
      shape: {
        type: "string",
        min: 1000
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
