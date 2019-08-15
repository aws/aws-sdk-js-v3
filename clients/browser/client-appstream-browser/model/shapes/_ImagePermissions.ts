import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImagePermissions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    allowFleet: {
      shape: {
        type: "boolean"
      }
    },
    allowImageBuilder: {
      shape: {
        type: "boolean"
      }
    }
  }
};
