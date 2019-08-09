import { Map as _Map_ } from "@aws-sdk/types";
import { _IdentityDkimAttributes } from "./_IdentityDkimAttributes";

export const _DkimAttributes: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _IdentityDkimAttributes
  }
};
