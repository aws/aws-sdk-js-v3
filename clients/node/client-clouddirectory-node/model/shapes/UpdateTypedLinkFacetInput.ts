import { _TypedLinkFacetAttributeUpdateList } from "./_TypedLinkFacetAttributeUpdateList";
import { _AttributeNameList } from "./_AttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTypedLinkFacetInput: _Structure_ = {
  type: "structure",
  required: ["SchemaArn", "Name", "AttributeUpdates", "IdentityAttributeOrder"],
  members: {
    SchemaArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    AttributeUpdates: {
      shape: _TypedLinkFacetAttributeUpdateList
    },
    IdentityAttributeOrder: {
      shape: _AttributeNameList
    }
  }
};
