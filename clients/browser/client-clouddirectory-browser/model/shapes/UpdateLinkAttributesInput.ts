import { _TypedLinkSpecifier } from "./_TypedLinkSpecifier";
import { _LinkAttributeUpdateList } from "./_LinkAttributeUpdateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateLinkAttributesInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "TypedLinkSpecifier", "AttributeUpdates"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    TypedLinkSpecifier: {
      shape: _TypedLinkSpecifier
    },
    AttributeUpdates: {
      shape: _LinkAttributeUpdateList
    }
  }
};
