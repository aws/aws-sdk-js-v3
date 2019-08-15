import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BackupPlansListMember: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupPlanArn: {
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
    DeletionDate: {
      shape: {
        type: "timestamp"
      }
    },
    VersionId: {
      shape: {
        type: "string"
      }
    },
    BackupPlanName: {
      shape: {
        type: "string"
      }
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    },
    LastExecutionDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
