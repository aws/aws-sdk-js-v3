import { _AccountAttributeNameStringList } from "./_AccountAttributeNameStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountAttributesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeNames: {
      shape: _AccountAttributeNameStringList,
      locationName: "attributeName"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
