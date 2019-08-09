import { _OpenIDConnectProviderListType } from "./_OpenIDConnectProviderListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOpenIDConnectProvidersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OpenIDConnectProviderList: {
      shape: _OpenIDConnectProviderListType
    }
  }
};
