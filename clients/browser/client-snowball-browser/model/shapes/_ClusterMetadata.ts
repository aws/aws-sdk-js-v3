import { _JobResource } from "./_JobResource";
import { _Notification } from "./_Notification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterId: {
      shape: {
        type: "string",
        min: 1
      }
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
    ClusterState: {
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
    AddressId: {
      shape: {
        type: "string",
        min: 40
      }
    },
    ShippingOption: {
      shape: {
        type: "string"
      }
    },
    Notification: {
      shape: _Notification
    },
    ForwardingAddressId: {
      shape: {
        type: "string",
        min: 40
      }
    }
  }
};
