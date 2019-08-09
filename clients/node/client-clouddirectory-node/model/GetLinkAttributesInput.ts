import { _TypedLinkSpecifier } from "./_TypedLinkSpecifier";
import { _AttributeNameList } from "./_AttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLinkAttributesInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "TypedLinkSpecifier", "AttributeNames"],
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
    AttributeNames: {
      shape: _AttributeNameList
    },
    ConsistencyLevel: {
      shape: {
        type: "string"
      }
    }
  }
};
