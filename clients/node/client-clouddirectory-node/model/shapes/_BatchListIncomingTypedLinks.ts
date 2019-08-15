import { _ObjectReference } from "./_ObjectReference";
import { _TypedLinkAttributeRangeList } from "./_TypedLinkAttributeRangeList";
import { _TypedLinkSchemaAndFacetName } from "./_TypedLinkSchemaAndFacetName";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchListIncomingTypedLinks: _Structure_ = {
  type: "structure",
  required: ["ObjectReference"],
  members: {
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
    }
  }
};
