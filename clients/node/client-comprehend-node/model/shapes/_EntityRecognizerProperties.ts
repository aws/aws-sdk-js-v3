import { _EntityRecognizerInputDataConfig } from "./_EntityRecognizerInputDataConfig";
import { _EntityRecognizerMetadata } from "./_EntityRecognizerMetadata";
import { _VpcConfig } from "./_VpcConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityRecognizerProperties: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EntityRecognizerArn: {
      shape: {
        type: "string"
      }
    },
    LanguageCode: {
      shape: {
        type: "string"
      }
    },
    Status: {
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
    TrainingStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    TrainingEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    InputDataConfig: {
      shape: _EntityRecognizerInputDataConfig
    },
    RecognizerMetadata: {
      shape: _EntityRecognizerMetadata
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
