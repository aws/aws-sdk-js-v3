import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TypedLinkSchemaAndFacetName: _Structure_ = {
  type: "structure",
  required: ["SchemaArn", "TypedLinkName"],
  members: {
    SchemaArn: {
      shape: {
        type: "string"
      }
    },
    TypedLinkName: {
      shape: {
        type: "string"
      }
    }
  }
};
