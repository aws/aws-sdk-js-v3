import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Group: _Structure_ = {
  type: "structure",
  required: ["Path", "GroupName", "GroupId", "Arn", "CreateDate"],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupId: {
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
    }
  }
};
