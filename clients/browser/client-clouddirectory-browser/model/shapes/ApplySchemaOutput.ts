import { Structure as _Structure_ } from "@aws-sdk/types";

export const ApplySchemaOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AppliedSchemaArn: {
      shape: {
        type: "string"
      }
    },
    DirectoryArn: {
      shape: {
        type: "string"
      }
    }
  }
};
