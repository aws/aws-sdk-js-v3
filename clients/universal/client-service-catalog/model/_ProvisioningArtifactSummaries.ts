import { List as _List_ } from "@aws-sdk/types";
import { _ProvisioningArtifactSummary } from "./_ProvisioningArtifactSummary";

export const _ProvisioningArtifactSummaries: _List_ = {
  type: "list",
  member: {
    shape: _ProvisioningArtifactSummary
  }
};
