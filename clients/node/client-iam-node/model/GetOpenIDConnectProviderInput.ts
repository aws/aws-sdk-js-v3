import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOpenIDConnectProviderInput: _Structure_ = {
  type: "structure",
  required: ["OpenIDConnectProviderArn"],
  members: {
    OpenIDConnectProviderArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
