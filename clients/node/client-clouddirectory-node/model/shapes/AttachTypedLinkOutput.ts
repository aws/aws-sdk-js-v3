import { _TypedLinkSpecifier } from "./_TypedLinkSpecifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachTypedLinkOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TypedLinkSpecifier: {
      shape: _TypedLinkSpecifier
    }
  }
};
