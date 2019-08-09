import { _ObjectReference } from "./_ObjectReference";
import { _SchemaFacet } from "./_SchemaFacet";
import { _AttributeNameList } from "./_AttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchGetObjectAttributes: _Structure_ = {
  type: "structure",
  required: ["ObjectReference", "SchemaFacet", "AttributeNames"],
  members: {
    ObjectReference: {
      shape: _ObjectReference
    },
    SchemaFacet: {
      shape: _SchemaFacet
    },
    AttributeNames: {
      shape: _AttributeNameList
    }
  }
};
