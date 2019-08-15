import { _ProposalActions } from "./_ProposalActions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Proposal: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProposalId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NetworkId: {
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
    Actions: {
      shape: _ProposalActions
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
    },
    YesVoteCount: {
      shape: {
        type: "integer"
      }
    },
    NoVoteCount: {
      shape: {
        type: "integer"
      }
    },
    OutstandingVoteCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
