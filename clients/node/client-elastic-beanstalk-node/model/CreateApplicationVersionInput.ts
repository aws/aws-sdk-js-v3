import { _SourceBuildInformation } from "./_SourceBuildInformation";
import { _S3Location } from "./_S3Location";
import { _BuildConfiguration } from "./_BuildConfiguration";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApplicationVersionInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "VersionLabel"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionLabel: {
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
    SourceBuildInformation: {
      shape: _SourceBuildInformation
    },
    SourceBundle: {
      shape: _S3Location
    },
    BuildConfiguration: {
      shape: _BuildConfiguration
    },
    AutoCreateApplication: {
      shape: {
        type: "boolean"
      }
    },
    Process: {
      shape: {
        type: "boolean"
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
