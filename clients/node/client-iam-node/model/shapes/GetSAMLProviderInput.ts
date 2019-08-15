import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSAMLProviderInput: _Structure_ = {
  type: "structure",
  required: ["SAMLProviderArn"],
  members: {
    SAMLProviderArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
