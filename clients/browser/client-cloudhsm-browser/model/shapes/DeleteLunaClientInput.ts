import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLunaClientInput: _Structure_ = {
  type: "structure",
  required: ["ClientArn"],
  members: {
    ClientArn: {
      shape: {
        type: "string"
      }
    }
  }
};
