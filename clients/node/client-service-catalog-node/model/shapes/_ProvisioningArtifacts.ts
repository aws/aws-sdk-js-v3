import { List as _List_ } from "@aws-sdk/types";
import { _ProvisioningArtifact } from "./_ProvisioningArtifact";

export const _ProvisioningArtifacts: _List_ = {
  type: "list",
  member: {
    shape: _ProvisioningArtifact
  }
};
