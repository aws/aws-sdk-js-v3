import { _JobResource } from "./_JobResource";
import { _Notification } from "./_Notification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterInput: _Structure_ = {
  type: "structure",
  required: ["JobType", "Resources", "AddressId", "RoleARN", "ShippingOption"],
  members: {
    JobType: {
      shape: {
        type: "string"
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
    AddressId: {
      shape: {
        type: "string",
        min: 40
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
    SnowballType: {
      shape: {
        type: "string"
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
