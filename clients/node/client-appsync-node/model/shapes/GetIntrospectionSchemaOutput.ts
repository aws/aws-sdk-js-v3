import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIntrospectionSchemaOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    schema: {
      shape: {
        type: "blob"
      }
    }
  },
  payload: "schema"
};
