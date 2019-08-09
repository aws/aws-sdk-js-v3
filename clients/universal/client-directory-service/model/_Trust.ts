import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Trust: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    TrustId: {
      shape: {
        type: "string"
      }
    },
    RemoteDomainName: {
      shape: {
        type: "string"
      }
    },
    TrustType: {
      shape: {
        type: "string"
      }
    },
    TrustDirection: {
      shape: {
        type: "string"
      }
    },
    TrustState: {
      shape: {
        type: "string"
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
    },
    StateLastUpdatedDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    TrustStateReason: {
      shape: {
        type: "string"
      }
    },
    SelectiveAuth: {
      shape: {
        type: "string"
      }
    }
  }
};
