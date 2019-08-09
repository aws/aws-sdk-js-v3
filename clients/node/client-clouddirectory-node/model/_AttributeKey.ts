import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttributeKey: _Structure_ = {
  type: "structure",
  required: ["SchemaArn", "FacetName", "Name"],
  members: {
    SchemaArn: {
      shape: {
        type: "string"
      }
    },
    FacetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
