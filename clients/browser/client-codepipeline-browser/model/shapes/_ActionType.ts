import { _ActionTypeId } from "./_ActionTypeId";
import { _ActionTypeSettings } from "./_ActionTypeSettings";
import { _ActionConfigurationPropertyList } from "./_ActionConfigurationPropertyList";
import { _ArtifactDetails } from "./_ArtifactDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionType: _Structure_ = {
  type: "structure",
  required: ["id", "inputArtifactDetails", "outputArtifactDetails"],
  members: {
    id: {
      shape: _ActionTypeId
    },
    settings: {
      shape: _ActionTypeSettings
    },
    actionConfigurationProperties: {
      shape: _ActionConfigurationPropertyList
    },
    inputArtifactDetails: {
      shape: _ArtifactDetails
    },
    outputArtifactDetails: {
      shape: _ArtifactDetails
    }
  }
};
