import { List as _List_ } from "@aws-sdk/types";
import { _ProvisioningArtifactParameter } from "./_ProvisioningArtifactParameter";

export const _ProvisioningArtifactParameters: _List_ = {
  type: "list",
  member: {
    shape: _ProvisioningArtifactParameter
  }
};
