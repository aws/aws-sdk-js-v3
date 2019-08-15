import { _InputDataConfig } from "./_InputDataConfig";
import { _OutputDataConfig } from "./_OutputDataConfig";
import { _VpcConfig } from "./_VpcConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartTopicsDetectionJobInput: _Structure_ = {
  type: "structure",
  required: ["InputDataConfig", "OutputDataConfig", "DataAccessRoleArn"],
  members: {
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
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NumberOfTopics: {
      shape: {
        type: "integer",
        min: 1
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
