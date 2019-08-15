import { _ProvidersListType } from "./_ProvidersListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIdentityProvidersOutput: _Structure_ = {
  type: "structure",
  required: ["Providers"],
  members: {
    Providers: {
      shape: _ProvidersListType
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
