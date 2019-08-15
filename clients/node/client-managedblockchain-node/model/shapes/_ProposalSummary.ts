import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProposalSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProposalId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ProposedByMemberId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProposedByMemberName: {
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
    }
  }
};
