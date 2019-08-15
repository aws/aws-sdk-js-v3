import { _OperatingSystemConfigurationManagers } from "./_OperatingSystemConfigurationManagers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OperatingSystem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    ConfigurationManagers: {
      shape: _OperatingSystemConfigurationManagers
    },
    ReportedName: {
      shape: {
        type: "string"
      }
    },
    ReportedVersion: {
      shape: {
        type: "string"
      }
    },
    Supported: {
      shape: {
        type: "boolean"
      }
    }
  }
};
