import { _OpsItemOperationalData } from "./_OpsItemOperationalData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OpsItemSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreatedBy: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedBy: {
      shape: {
        type: "string"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    Priority: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Source: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    OpsItemId: {
      shape: {
        type: "string"
      }
    },
    Title: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OperationalData: {
      shape: _OpsItemOperationalData
    }
  }
};
