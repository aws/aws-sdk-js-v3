import { _GetAuthorizationTokenRegistryIdList } from "./_GetAuthorizationTokenRegistryIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAuthorizationTokenInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    registryIds: {
      shape: _GetAuthorizationTokenRegistryIdList
    }
  }
};
