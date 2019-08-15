import { _UpdateTargets } from "./_UpdateTargets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSoftwareUpdateJobInput: _Structure_ = {
  type: "structure",
  required: [
    "S3UrlSignerRole",
    "UpdateTargetsArchitecture",
    "SoftwareToUpdate",
    "UpdateTargets",
    "UpdateTargetsOperatingSystem"
  ],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    S3UrlSignerRole: {
      shape: {
        type: "string"
      }
    },
    SoftwareToUpdate: {
      shape: {
        type: "string"
      }
    },
    UpdateAgentLogLevel: {
      shape: {
        type: "string"
      }
    },
    UpdateTargets: {
      shape: _UpdateTargets
    },
    UpdateTargetsArchitecture: {
      shape: {
        type: "string"
      }
    },
    UpdateTargetsOperatingSystem: {
      shape: {
        type: "string"
      }
    }
  }
};
