import { _NetworkSummary } from "./_NetworkSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Invitation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InvitationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    ExpirationDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    NetworkSummary: {
      shape: _NetworkSummary
    }
  }
};
