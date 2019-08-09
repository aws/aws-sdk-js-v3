import { _PublicKeyList } from "./_PublicKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPublicKeysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PublicKeyList: {
      shape: _PublicKeyList
    }
  },
  payload: "PublicKeyList"
};
