import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterAVSDeviceInput: _Structure_ = {
  type: "structure",
  required: [
    "ClientId",
    "UserCode",
    "ProductId",
    "DeviceSerialNumber",
    "AmazonId"
  ],
  members: {
    ClientId: {
      shape: {
        type: "string"
      }
    },
    UserCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProductId: {
      shape: {
        type: "string"
      }
    },
    DeviceSerialNumber: {
      shape: {
        type: "string"
      }
    },
    AmazonId: {
      shape: {
        type: "string"
      }
    }
  }
};
