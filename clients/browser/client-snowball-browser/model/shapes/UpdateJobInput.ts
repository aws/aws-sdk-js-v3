import { _Notification } from "./_Notification";
import { _JobResource } from "./_JobResource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateJobInput: _Structure_ = {
  type: "structure",
  required: ["JobId"],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 39
      }
    },
    RoleARN: {
      shape: {
        type: "string"
      }
    },
    Notification: {
      shape: _Notification
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
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SnowballCapacityPreference: {
      shape: {
        type: "string"
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
