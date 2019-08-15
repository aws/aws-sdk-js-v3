import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAppInput: _Structure_ = {
  type: "structure",
  required: ["AppId"],
  members: {
    AppId: {
      shape: {
        type: "string"
      }
    }
  }
};
