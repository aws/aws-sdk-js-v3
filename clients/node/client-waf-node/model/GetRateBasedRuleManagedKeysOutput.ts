import { _ManagedKeys } from "./_ManagedKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRateBasedRuleManagedKeysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ManagedKeys: {
      shape: _ManagedKeys
    },
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
