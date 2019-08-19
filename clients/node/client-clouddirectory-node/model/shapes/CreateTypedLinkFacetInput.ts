import { _TypedLinkFacet } from "./_TypedLinkFacet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTypedLinkFacetInput: _Structure_ = {
  type: "structure",
  required: ["SchemaArn", "Facet"],
  members: {
    SchemaArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    Facet: {
      shape: _TypedLinkFacet
    }
  }
};
