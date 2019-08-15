import { _Lifecycle } from "./_Lifecycle";
import { _CalculatedLifecycle } from "./_CalculatedLifecycle";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRecoveryPointLifecycleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupVaultArn: {
      shape: {
        type: "string"
      }
    },
    RecoveryPointArn: {
      shape: {
        type: "string"
      }
    },
    Lifecycle: {
      shape: _Lifecycle
    },
    CalculatedLifecycle: {
      shape: _CalculatedLifecycle
    }
  }
};
