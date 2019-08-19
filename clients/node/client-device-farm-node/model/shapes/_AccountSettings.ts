import { _PurchasedDevicesMap } from "./_PurchasedDevicesMap";
import { _TrialMinutes } from "./_TrialMinutes";
import { _MaxSlotMap } from "./_MaxSlotMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    awsAccountNumber: {
      shape: {
        type: "string",
        min: 2
      }
    },
    unmeteredDevices: {
      shape: _PurchasedDevicesMap
    },
    unmeteredRemoteAccessDevices: {
      shape: _PurchasedDevicesMap
    },
    maxJobTimeoutMinutes: {
      shape: {
        type: "integer"
      }
    },
    trialMinutes: {
      shape: _TrialMinutes
    },
    maxSlots: {
      shape: _MaxSlotMap
    },
    defaultJobTimeoutMinutes: {
      shape: {
        type: "integer"
      }
    },
    skipAppResign: {
      shape: {
        type: "boolean"
      }
    }
  }
};
