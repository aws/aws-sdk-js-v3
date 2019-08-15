import { _SchemaFacetList } from "./_SchemaFacetList";
import { _AttributeKeyAndValueList } from "./_AttributeKeyAndValueList";
import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchCreateObject: _Structure_ = {
  type: "structure",
  required: ["SchemaFacet", "ObjectAttributeList"],
  members: {
    SchemaFacet: {
      shape: _SchemaFacetList
    },
    ObjectAttributeList: {
      shape: _AttributeKeyAndValueList
    },
    ParentReference: {
      shape: _ObjectReference
    },
    LinkName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BatchReferenceName: {
      shape: {
        type: "string"
      }
    }
  }
};
