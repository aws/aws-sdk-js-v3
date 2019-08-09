import { _InstanceAssociationOutputUrl } from "./_InstanceAssociationOutputUrl";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceAssociationStatusInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    DocumentVersion: {
      shape: {
        type: "string"
      }
    },
    AssociationVersion: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    ExecutionDate: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    DetailedStatus: {
      shape: {
        type: "string"
      }
    },
    ExecutionSummary: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    OutputUrl: {
      shape: _InstanceAssociationOutputUrl
    },
    AssociationName: {
      shape: {
        type: "string"
      }
    }
  }
};
