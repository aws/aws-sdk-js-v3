import { _UiConfig } from "./_UiConfig";
import { _TaskKeywords } from "./_TaskKeywords";
import { _AnnotationConsolidationConfig } from "./_AnnotationConsolidationConfig";
import { _PublicWorkforceTaskPrice } from "./_PublicWorkforceTaskPrice";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HumanTaskConfig: _Structure_ = {
  type: "structure",
  required: [
    "WorkteamArn",
    "UiConfig",
    "PreHumanTaskLambdaArn",
    "TaskTitle",
    "TaskDescription",
    "NumberOfHumanWorkersPerDataObject",
    "TaskTimeLimitInSeconds",
    "AnnotationConsolidationConfig"
  ],
  members: {
    WorkteamArn: {
      shape: {
        type: "string"
      }
    },
    UiConfig: {
      shape: _UiConfig
    },
    PreHumanTaskLambdaArn: {
      shape: {
        type: "string"
      }
    },
    TaskKeywords: {
      shape: _TaskKeywords
    },
    TaskTitle: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TaskDescription: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NumberOfHumanWorkersPerDataObject: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    TaskTimeLimitInSeconds: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    TaskAvailabilityLifetimeInSeconds: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MaxConcurrentTaskCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    AnnotationConsolidationConfig: {
      shape: _AnnotationConsolidationConfig
    },
    PublicWorkforceTaskPrice: {
      shape: _PublicWorkforceTaskPrice
    }
  }
};
