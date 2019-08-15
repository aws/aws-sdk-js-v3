import { _ImplicitDeny } from "./_ImplicitDeny";
import { _ExplicitDeny } from "./_ExplicitDeny";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Denied: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    implicitDeny: {
      shape: _ImplicitDeny
    },
    explicitDeny: {
      shape: _ExplicitDeny
    }
  }
};
