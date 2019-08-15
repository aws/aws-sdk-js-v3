import { _TagList } from "./_TagList";
import { _EntityRecognizerInputDataConfig } from "./_EntityRecognizerInputDataConfig";
import { _VpcConfig } from "./_VpcConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEntityRecognizerInput: _Structure_ = {
  type: "structure",
  required: [
    "RecognizerName",
    "DataAccessRoleArn",
    "InputDataConfig",
    "LanguageCode"
  ],
  members: {
    RecognizerName: {
      shape: {
        type: "string"
      }
    },
    DataAccessRoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Tags: {
      shape: _TagList
    },
    InputDataConfig: {
      shape: _EntityRecognizerInputDataConfig
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LanguageCode: {
      shape: {
        type: "string"
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
