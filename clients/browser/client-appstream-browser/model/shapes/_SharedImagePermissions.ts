import { _ImagePermissions } from "./_ImagePermissions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SharedImagePermissions: _Structure_ = {
  type: "structure",
  required: ["sharedAccountId", "imagePermissions"],
  members: {
    sharedAccountId: {
      shape: {
        type: "string"
      }
    },
    imagePermissions: {
      shape: _ImagePermissions
    }
  }
};
