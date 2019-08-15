import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SMSChannelResponse: _Structure_ = {
  type: "structure",
  required: ["Platform"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    HasCredential: {
      shape: {
        type: "boolean"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    IsArchived: {
      shape: {
        type: "boolean"
      }
    },
    LastModifiedBy: {
      shape: {
        type: "string"
      }
    },
    LastModifiedDate: {
      shape: {
        type: "string"
      }
    },
    Platform: {
      shape: {
        type: "string"
      }
    },
    PromotionalMessagesPerSecond: {
      shape: {
        type: "integer"
      }
    },
    SenderId: {
      shape: {
        type: "string"
      }
    },
    ShortCode: {
      shape: {
        type: "string"
      }
    },
    TransactionalMessagesPerSecond: {
      shape: {
        type: "integer"
      }
    },
    Version: {
      shape: {
        type: "integer"
      }
    }
  }
};
