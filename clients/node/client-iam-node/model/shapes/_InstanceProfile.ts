import { _roleListType } from "./_roleListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceProfile: _Structure_ = {
  type: "structure",
  required: [
    "Path",
    "InstanceProfileName",
    "InstanceProfileId",
    "Arn",
    "CreateDate",
    "Roles"
  ],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InstanceProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InstanceProfileId: {
      shape: {
        type: "string",
        min: 16
      }
    },
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    Roles: {
      shape: _roleListType
    }
  }
};
