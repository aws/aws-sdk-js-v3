import { _SchemaFacet } from "./_SchemaFacet";
import { _AttributeKeyAndValueList } from "./_AttributeKeyAndValueList";
import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddFacetToObjectInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "SchemaFacet", "ObjectReference"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    SchemaFacet: {
      shape: _SchemaFacet
    },
    ObjectAttributeList: {
      shape: _AttributeKeyAndValueList
    },
    ObjectReference: {
      shape: _ObjectReference
    }
  }
};
