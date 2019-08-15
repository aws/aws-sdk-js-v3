import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEnvironmentInput: _Structure_ = {
  type: "structure",
  required: ["environmentId"],
  members: {
    environmentId: {
      shape: {
        type: "string"
      }
    }
  }
};
