import { _ListOfApiStage } from "./_ListOfApiStage";
import { _ThrottleSettings } from "./_ThrottleSettings";
import { _QuotaSettings } from "./_QuotaSettings";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UsagePlan: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    apiStages: {
      shape: _ListOfApiStage
    },
    throttle: {
      shape: _ThrottleSettings
    },
    quota: {
      shape: _QuotaSettings
    },
    productCode: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _MapOfStringToString
    }
  }
};
