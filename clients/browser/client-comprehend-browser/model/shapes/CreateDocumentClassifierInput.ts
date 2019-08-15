import { _TagList } from "./_TagList";
import { _DocumentClassifierInputDataConfig } from "./_DocumentClassifierInputDataConfig";
import { _DocumentClassifierOutputDataConfig } from "./_DocumentClassifierOutputDataConfig";
import { _VpcConfig } from "./_VpcConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDocumentClassifierInput: _Structure_ = {
  type: "structure",
  required: [
    "DocumentClassifierName",
    "DataAccessRoleArn",
    "InputDataConfig",
    "LanguageCode"
  ],
  members: {
    DocumentClassifierName: {
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
      shape: _DocumentClassifierInputDataConfig
    },
    OutputDataConfig: {
      shape: _DocumentClassifierOutputDataConfig
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
