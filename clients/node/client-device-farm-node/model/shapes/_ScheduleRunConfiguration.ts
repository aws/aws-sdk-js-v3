import { _Location } from "./_Location";
import { _AmazonResourceNames } from "./_AmazonResourceNames";
import { _CustomerArtifactPaths } from "./_CustomerArtifactPaths";
import { _Radios } from "./_Radios";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduleRunConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    extraDataPackageArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    networkProfileArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    locale: {
      shape: {
        type: "string"
      }
    },
    location: {
      shape: _Location
    },
    vpceConfigurationArns: {
      shape: _AmazonResourceNames
    },
    customerArtifactPaths: {
      shape: _CustomerArtifactPaths
    },
    radios: {
      shape: _Radios
    },
    auxiliaryApps: {
      shape: _AmazonResourceNames
    },
    billingMethod: {
      shape: {
        type: "string"
      }
    }
  }
};
