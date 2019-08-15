import { _IdentityInfoList } from "./_IdentityInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEmailIdentitiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EmailIdentities: {
      shape: _IdentityInfoList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
