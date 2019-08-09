import { _TypedLinkSpecifier } from "./_TypedLinkSpecifier";
import { _AttributeNameList } from "./_AttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchGetLinkAttributes: _Structure_ = {
  type: "structure",
  required: ["TypedLinkSpecifier", "AttributeNames"],
  members: {
    TypedLinkSpecifier: {
      shape: _TypedLinkSpecifier
    },
    AttributeNames: {
      shape: _AttributeNameList
    }
  }
};
