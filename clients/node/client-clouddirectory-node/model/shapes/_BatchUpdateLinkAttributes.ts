import { _TypedLinkSpecifier } from "./_TypedLinkSpecifier";
import { _LinkAttributeUpdateList } from "./_LinkAttributeUpdateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchUpdateLinkAttributes: _Structure_ = {
  type: "structure",
  required: ["TypedLinkSpecifier", "AttributeUpdates"],
  members: {
    TypedLinkSpecifier: {
      shape: _TypedLinkSpecifier
    },
    AttributeUpdates: {
      shape: _LinkAttributeUpdateList
    }
  }
};
