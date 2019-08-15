import { _AssessmentRulesPackageArnList } from "./_AssessmentRulesPackageArnList";
import { _UserAttributeList } from "./_UserAttributeList";
import { _AssessmentRunStateChangeList } from "./_AssessmentRunStateChangeList";
import { _AssessmentRunNotificationList } from "./_AssessmentRunNotificationList";
import { _AssessmentRunFindingCounts } from "./_AssessmentRunFindingCounts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssessmentRun: _Structure_ = {
  type: "structure",
  required: [
    "arn",
    "name",
    "assessmentTemplateArn",
    "state",
    "durationInSeconds",
    "rulesPackageArns",
    "userAttributesForFindings",
    "createdAt",
    "stateChangedAt",
    "dataCollected",
    "stateChanges",
    "notifications",
    "findingCounts"
  ],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    assessmentTemplateArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    state: {
      shape: {
        type: "string"
      }
    },
    durationInSeconds: {
      shape: {
        type: "integer",
        min: 180
      }
    },
    rulesPackageArns: {
      shape: _AssessmentRulesPackageArnList
    },
    userAttributesForFindings: {
      shape: _UserAttributeList
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    startedAt: {
      shape: {
        type: "timestamp"
      }
    },
    completedAt: {
      shape: {
        type: "timestamp"
      }
    },
    stateChangedAt: {
      shape: {
        type: "timestamp"
      }
    },
    dataCollected: {
      shape: {
        type: "boolean"
      }
    },
    stateChanges: {
      shape: _AssessmentRunStateChangeList
    },
    notifications: {
      shape: _AssessmentRunNotificationList
    },
    findingCounts: {
      shape: _AssessmentRunFindingCounts
    }
  }
};
