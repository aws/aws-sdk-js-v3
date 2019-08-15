import { _JobResource } from "./_JobResource";
import { _Notification } from "./_Notification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateClusterInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId"],
  members: {
    ClusterId: {
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
    Description: {
      shape: {
        type: "string",
        min: 1
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
