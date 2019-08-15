import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSAMLProviderOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SAMLProviderArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
