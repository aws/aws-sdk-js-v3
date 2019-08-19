import { _StackSetAccounts } from "./_StackSetAccounts";
import { _StackSetRegions } from "./_StackSetRegions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisioningArtifactPreferences: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackSetAccounts: {
      shape: _StackSetAccounts
    },
    StackSetRegions: {
      shape: _StackSetRegions
    }
  }
};
