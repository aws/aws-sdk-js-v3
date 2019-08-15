import { List as _List_ } from "@aws-sdk/types";
import { _ProvisioningArtifactDetail } from "./_ProvisioningArtifactDetail";

export const _ProvisioningArtifactDetails: _List_ = {
  type: "list",
  member: {
    shape: _ProvisioningArtifactDetail
  }
};
