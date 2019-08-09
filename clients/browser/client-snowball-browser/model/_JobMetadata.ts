import { _JobResource } from "./_JobResource";
import { _ShippingDetails } from "./_ShippingDetails";
import { _Notification } from "./_Notification";
import { _DataTransfer } from "./_DataTransfer";
import { _JobLogs } from "./_JobLogs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobState: {
      shape: {
        type: "string"
      }
    },
    JobType: {
      shape: {
        type: "string"
      }
    },
    SnowballType: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    Resources: {
      shape: _JobResource
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    KmsKeyARN: {
      shape: {
        type: "string"
      }
    },
    RoleARN: {
      shape: {
        type: "string"
      }
    },
    AddressId: {
      shape: {
        type: "string",
        min: 40
      }
    },
    ShippingDetails: {
      shape: _ShippingDetails
    },
    SnowballCapacityPreference: {
      shape: {
        type: "string"
      }
    },
    Notification: {
      shape: _Notification
    },
    DataTransferProgress: {
      shape: _DataTransfer
    },
    JobLogInfo: {
      shape: _JobLogs
    },
    ClusterId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ForwardingAddressId: {
      shape: {
        type: "string",
        min: 40
      }
    }
  }
};
