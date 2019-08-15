import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Assignment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssignmentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    WorkerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HITId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AssignmentStatus: {
      shape: {
        type: "string"
      }
    },
    AutoApprovalTime: {
      shape: {
        type: "timestamp"
      }
    },
    AcceptTime: {
      shape: {
        type: "timestamp"
      }
    },
    SubmitTime: {
      shape: {
        type: "timestamp"
      }
    },
    ApprovalTime: {
      shape: {
        type: "timestamp"
      }
    },
    RejectionTime: {
      shape: {
        type: "timestamp"
      }
    },
    Deadline: {
      shape: {
        type: "timestamp"
      }
    },
    Answer: {
      shape: {
        type: "string"
      }
    },
    RequesterFeedback: {
      shape: {
        type: "string"
      }
    }
  }
};
