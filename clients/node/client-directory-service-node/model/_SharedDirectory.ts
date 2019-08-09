import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SharedDirectory: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OwnerAccountId: {
      shape: {
        type: "string"
      }
    },
    OwnerDirectoryId: {
      shape: {
        type: "string"
      }
    },
    ShareMethod: {
      shape: {
        type: "string"
      }
    },
    SharedAccountId: {
      shape: {
        type: "string"
      }
    },
    SharedDirectoryId: {
      shape: {
        type: "string"
      }
    },
    ShareStatus: {
      shape: {
        type: "string"
      }
    },
    ShareNotes: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    CreatedDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdatedDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
