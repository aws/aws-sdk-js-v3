import { _DocumentClassifierInputDataConfig } from "./_DocumentClassifierInputDataConfig";
import { _DocumentClassifierOutputDataConfig } from "./_DocumentClassifierOutputDataConfig";
import { _ClassifierMetadata } from "./_ClassifierMetadata";
import { _VpcConfig } from "./_VpcConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentClassifierProperties: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentClassifierArn: {
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
      shape: _DocumentClassifierInputDataConfig
    },
    OutputDataConfig: {
      shape: _DocumentClassifierOutputDataConfig
    },
    ClassifierMetadata: {
      shape: _ClassifierMetadata
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
