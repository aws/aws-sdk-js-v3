import { _VersionLabelsList } from "./_VersionLabelsList";
import { _ConfigurationTemplateNamesList } from "./_ConfigurationTemplateNamesList";
import { _ApplicationResourceLifecycleConfig } from "./_ApplicationResourceLifecycleConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationArn: {
      shape: {
        type: "string"
      }
    },
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DateCreated: {
      shape: {
        type: "timestamp"
      }
    },
    DateUpdated: {
      shape: {
        type: "timestamp"
      }
    },
    Versions: {
      shape: _VersionLabelsList
    },
    ConfigurationTemplates: {
      shape: _ConfigurationTemplateNamesList
    },
    ResourceLifecycleConfig: {
      shape: _ApplicationResourceLifecycleConfig
    }
  }
};
