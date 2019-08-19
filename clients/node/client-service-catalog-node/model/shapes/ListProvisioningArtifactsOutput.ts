import { _ProvisioningArtifactDetails } from "./_ProvisioningArtifactDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProvisioningArtifactsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProvisioningArtifactDetails: {
      shape: _ProvisioningArtifactDetails
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
