import { _ProvisioningArtifactViews } from "./_ProvisioningArtifactViews";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProvisioningArtifactsForServiceActionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProvisioningArtifactViews: {
      shape: _ProvisioningArtifactViews
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
