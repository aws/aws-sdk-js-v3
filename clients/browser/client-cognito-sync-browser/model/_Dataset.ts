import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Dataset: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DatasetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedBy: {
      shape: {
        type: "string"
      }
    },
    DataStorage: {
      shape: {
        type: "integer"
      }
    },
    NumRecords: {
      shape: {
        type: "integer"
      }
    }
  }
};
