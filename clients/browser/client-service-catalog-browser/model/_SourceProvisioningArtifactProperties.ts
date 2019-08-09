import { List as _List_ } from "@aws-sdk/types";
import { _SourceProvisioningArtifactPropertiesMap } from "./_SourceProvisioningArtifactPropertiesMap";

export const _SourceProvisioningArtifactProperties: _List_ = {
  type: "list",
  member: {
    shape: _SourceProvisioningArtifactPropertiesMap
  }
};
