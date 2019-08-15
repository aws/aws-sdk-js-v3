import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BackupSelectionsListMember: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SelectionId: {
      shape: {
        type: "string"
      }
    },
    SelectionName: {
      shape: {
        type: "string"
      }
    },
    BackupPlanId: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    },
    IamRoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
