import { List as _List_ } from "@aws-sdk/types";
import { _ProvisioningArtifactView } from "./_ProvisioningArtifactView";

export const _ProvisioningArtifactViews: _List_ = {
  type: "list",
  member: {
    shape: _ProvisioningArtifactView
  }
};
