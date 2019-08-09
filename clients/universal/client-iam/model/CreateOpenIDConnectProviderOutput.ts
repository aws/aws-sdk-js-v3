import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateOpenIDConnectProviderOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OpenIDConnectProviderArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
