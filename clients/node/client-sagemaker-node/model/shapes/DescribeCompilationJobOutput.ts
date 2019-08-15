import { _StoppingCondition } from "./_StoppingCondition";
import { _ModelArtifacts } from "./_ModelArtifacts";
import { _InputConfig } from "./_InputConfig";
import { _OutputConfig } from "./_OutputConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCompilationJobOutput: _Structure_ = {
  type: "structure",
  required: [
    "CompilationJobName",
    "CompilationJobArn",
    "CompilationJobStatus",
    "StoppingCondition",
    "CreationTime",
    "LastModifiedTime",
    "FailureReason",
    "ModelArtifacts",
    "RoleArn",
    "InputConfig",
    "OutputConfig"
  ],
  members: {
    CompilationJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CompilationJobArn: {
      shape: {
        type: "string"
      }
    },
    CompilationJobStatus: {
      shape: {
        type: "string"
      }
    },
    CompilationStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    CompilationEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    StoppingCondition: {
      shape: _StoppingCondition
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    },
    ModelArtifacts: {
      shape: _ModelArtifacts
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    InputConfig: {
      shape: _InputConfig
    },
    OutputConfig: {
      shape: _OutputConfig
    }
  }
};
