import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddClientIDToOpenIDConnectProviderInput: _Structure_ = {
  type: "structure",
  required: ["OpenIDConnectProviderArn", "ClientID"],
  members: {
    OpenIDConnectProviderArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ClientID: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
