import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SchemaExtensionInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    SchemaExtensionId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    SchemaExtensionStatus: {
      shape: {
        type: "string"
      }
    },
    SchemaExtensionStatusReason: {
      shape: {
        type: "string"
      }
    },
    StartDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
