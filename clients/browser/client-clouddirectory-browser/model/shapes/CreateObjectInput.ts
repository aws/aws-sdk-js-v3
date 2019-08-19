import { _SchemaFacetList } from "./_SchemaFacetList";
import { _AttributeKeyAndValueList } from "./_AttributeKeyAndValueList";
import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateObjectInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "SchemaFacets"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    SchemaFacets: {
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
    }
  }
};
