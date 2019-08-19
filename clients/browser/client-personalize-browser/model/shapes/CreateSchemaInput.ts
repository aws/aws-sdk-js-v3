import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSchemaInput: _Structure_ = {
  type: "structure",
  required: ["name", "schema"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    schema: {
      shape: {
        type: "string"
      }
    }
  }
};
