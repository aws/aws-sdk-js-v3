import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePolicyVersionInput: _Structure_ = {
  type: "structure",
  required: ["PolicyArn", "VersionId"],
  members: {
    PolicyArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    VersionId: {
      shape: {
        type: "string"
      }
    }
  }
};
