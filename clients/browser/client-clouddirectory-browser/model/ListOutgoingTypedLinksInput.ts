import { _ObjectReference } from "./_ObjectReference";
import { _TypedLinkAttributeRangeList } from "./_TypedLinkAttributeRangeList";
import { _TypedLinkSchemaAndFacetName } from "./_TypedLinkSchemaAndFacetName";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOutgoingTypedLinksInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "ObjectReference"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    ObjectReference: {
      shape: _ObjectReference
    },
    FilterAttributeRanges: {
      shape: _TypedLinkAttributeRangeList
    },
    FilterTypedLink: {
      shape: _TypedLinkSchemaAndFacetName
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ConsistencyLevel: {
      shape: {
        type: "string"
      }
    }
  }
};
