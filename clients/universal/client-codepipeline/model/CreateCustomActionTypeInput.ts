import { _ActionTypeSettings } from "./_ActionTypeSettings";
import { _ActionConfigurationPropertyList } from "./_ActionConfigurationPropertyList";
import { _ArtifactDetails } from "./_ArtifactDetails";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCustomActionTypeInput: _Structure_ = {
  type: "structure",
  required: [
    "category",
    "provider",
    "version",
    "inputArtifactDetails",
    "outputArtifactDetails"
  ],
  members: {
    category: {
      shape: {
        type: "string"
      }
    },
    provider: {
      shape: {
        type: "string",
        min: 1
      }
    },
    version: {
      shape: {
        type: "string",
        min: 1
      }
    },
    settings: {
      shape: _ActionTypeSettings
    },
    configurationProperties: {
      shape: _ActionConfigurationPropertyList
    },
    inputArtifactDetails: {
      shape: _ArtifactDetails
    },
    outputArtifactDetails: {
      shape: _ArtifactDetails
    },
    tags: {
      shape: _TagList
    }
  }
};
