import { _TypedLinkSpecifier } from "./_TypedLinkSpecifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchDetachTypedLink: _Structure_ = {
  type: "structure",
  required: ["TypedLinkSpecifier"],
  members: {
    TypedLinkSpecifier: {
      shape: _TypedLinkSpecifier
    }
  }
};
