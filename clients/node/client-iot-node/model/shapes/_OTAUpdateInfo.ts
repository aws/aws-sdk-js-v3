import { _Targets } from "./_Targets";
import { _AwsJobExecutionsRolloutConfig } from "./_AwsJobExecutionsRolloutConfig";
import { _OTAUpdateFiles } from "./_OTAUpdateFiles";
import { _ErrorInfo } from "./_ErrorInfo";
import { _AdditionalParameterMap } from "./_AdditionalParameterMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OTAUpdateInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    otaUpdateId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    otaUpdateArn: {
      shape: {
        type: "string"
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    targets: {
      shape: _Targets
    },
    awsJobExecutionsRolloutConfig: {
      shape: _AwsJobExecutionsRolloutConfig
    },
    targetSelection: {
      shape: {
        type: "string"
      }
    },
    otaUpdateFiles: {
      shape: _OTAUpdateFiles
    },
    otaUpdateStatus: {
      shape: {
        type: "string"
      }
    },
    awsIotJobId: {
      shape: {
        type: "string"
      }
    },
    awsIotJobArn: {
      shape: {
        type: "string"
      }
    },
    errorInfo: {
      shape: _ErrorInfo
    },
    additionalParameters: {
      shape: _AdditionalParameterMap
    }
  }
};
