import { _DeviceSecretVerifierConfigType } from "./_DeviceSecretVerifierConfigType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfirmDeviceInput: _Structure_ = {
  type: "structure",
  required: ["AccessToken", "DeviceKey"],
  members: {
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    DeviceKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeviceSecretVerifierConfig: {
      shape: _DeviceSecretVerifierConfigType
    },
    DeviceName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
