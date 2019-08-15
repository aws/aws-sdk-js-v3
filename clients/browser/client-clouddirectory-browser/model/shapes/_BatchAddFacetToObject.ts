import { _SchemaFacet } from "./_SchemaFacet";
import { _AttributeKeyAndValueList } from "./_AttributeKeyAndValueList";
import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchAddFacetToObject: _Structure_ = {
  type: "structure",
  required: ["SchemaFacet", "ObjectAttributeList", "ObjectReference"],
  members: {
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
