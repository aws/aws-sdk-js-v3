import { _ImagePermissions } from "./_ImagePermissions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateImagePermissionsInput: _Structure_ = {
  type: "structure",
  required: ["Name", "SharedAccountId", "ImagePermissions"],
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
    },
    ImagePermissions: {
      shape: _ImagePermissions
    }
  }
};
