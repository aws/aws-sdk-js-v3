import { _InputTransformer } from "./_InputTransformer";
import { _KinesisParameters } from "./_KinesisParameters";
import { _RunCommandParameters } from "./_RunCommandParameters";
import { _EcsParameters } from "./_EcsParameters";
import { _BatchParameters } from "./_BatchParameters";
import { _SqsParameters } from "./_SqsParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Target: _Structure_ = {
  type: "structure",
  required: ["Id", "Arn"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Input: {
      shape: {
        type: "string"
      }
    },
    InputPath: {
      shape: {
        type: "string"
      }
    },
    InputTransformer: {
      shape: _InputTransformer
    },
    KinesisParameters: {
      shape: _KinesisParameters
    },
    RunCommandParameters: {
      shape: _RunCommandParameters
    },
    EcsParameters: {
      shape: _EcsParameters
    },
    BatchParameters: {
      shape: _BatchParameters
    },
    SqsParameters: {
      shape: _SqsParameters
    }
  }
};
