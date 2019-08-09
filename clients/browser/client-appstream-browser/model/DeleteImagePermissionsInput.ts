import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteImagePermissionsInput: _Structure_ = {
  type: "structure",
  required: ["Name", "SharedAccountId"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    SharedAccountId: {
      shape: {
        type: "string"
      }
    }
  }
};
