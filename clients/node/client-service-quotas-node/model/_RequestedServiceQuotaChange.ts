import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RequestedServiceQuotaChange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CaseId: {
      shape: {
        type: "string"
      }
    },
    ServiceCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceName: {
      shape: {
        type: "string"
      }
    },
    QuotaCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    QuotaName: {
      shape: {
        type: "string"
      }
    },
    DesiredValue: {
      shape: {
        type: "float"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Created: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdated: {
      shape: {
        type: "timestamp"
      }
    },
    Requester: {
      shape: {
        type: "string"
      }
    },
    QuotaArn: {
      shape: {
        type: "string"
      }
    },
    GlobalQuota: {
      shape: {
        type: "boolean"
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    }
  }
};
