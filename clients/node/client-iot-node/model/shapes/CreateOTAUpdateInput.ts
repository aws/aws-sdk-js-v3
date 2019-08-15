import { _Targets } from "./_Targets";
import { _AwsJobExecutionsRolloutConfig } from "./_AwsJobExecutionsRolloutConfig";
import { _OTAUpdateFiles } from "./_OTAUpdateFiles";
import { _AdditionalParameterMap } from "./_AdditionalParameterMap";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateOTAUpdateInput: _Structure_ = {
  type: "structure",
  required: ["otaUpdateId", "targets", "files", "roleArn"],
  members: {
    otaUpdateId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "otaUpdateId"
    },
    description: {
      shape: {
        type: "string"
      }
    },
    targets: {
      shape: _Targets
    },
    targetSelection: {
      shape: {
        type: "string"
      }
    },
    awsJobExecutionsRolloutConfig: {
      shape: _AwsJobExecutionsRolloutConfig
    },
    files: {
      shape: _OTAUpdateFiles
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    additionalParameters: {
      shape: _AdditionalParameterMap
    },
    tags: {
      shape: _TagList
    }
  }
};
