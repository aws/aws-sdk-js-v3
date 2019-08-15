import { _SAMLProviderListType } from "./_SAMLProviderListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSAMLProvidersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SAMLProviderList: {
      shape: _SAMLProviderListType
    }
  }
};
