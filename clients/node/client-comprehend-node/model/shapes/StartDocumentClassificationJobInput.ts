import { _InputDataConfig } from "./_InputDataConfig";
import { _OutputDataConfig } from "./_OutputDataConfig";
import { _VpcConfig } from "./_VpcConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartDocumentClassificationJobInput: _Structure_ = {
  type: "structure",
  required: [
    "DocumentClassifierArn",
    "InputDataConfig",
    "OutputDataConfig",
    "DataAccessRoleArn"
  ],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DocumentClassifierArn: {
      shape: {
        type: "string"
      }
    },
    InputDataConfig: {
      shape: _InputDataConfig
    },
    OutputDataConfig: {
      shape: _OutputDataConfig
    },
    DataAccessRoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VolumeKmsKeyId: {
      shape: {
        type: "string"
      }
    },
    VpcConfig: {
      shape: _VpcConfig
    }
  }
};
