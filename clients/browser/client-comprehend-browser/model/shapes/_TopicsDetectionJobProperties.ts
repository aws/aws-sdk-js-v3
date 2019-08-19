import { _InputDataConfig } from "./_InputDataConfig";
import { _OutputDataConfig } from "./_OutputDataConfig";
import { _VpcConfig } from "./_VpcConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TopicsDetectionJobProperties: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobStatus: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    SubmitTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    InputDataConfig: {
      shape: _InputDataConfig
    },
    OutputDataConfig: {
      shape: _OutputDataConfig
    },
    NumberOfTopics: {
      shape: {
        type: "integer"
      }
    },
    DataAccessRoleArn: {
      shape: {
        type: "string",
        min: 20
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
