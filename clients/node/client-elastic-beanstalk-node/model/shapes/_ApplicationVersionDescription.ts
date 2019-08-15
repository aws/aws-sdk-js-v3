import { _SourceBuildInformation } from "./_SourceBuildInformation";
import { _S3Location } from "./_S3Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationVersionDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationVersionArn: {
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
    VersionLabel: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SourceBuildInformation: {
      shape: _SourceBuildInformation
    },
    BuildArn: {
      shape: {
        type: "string"
      }
    },
    SourceBundle: {
      shape: _S3Location
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
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
