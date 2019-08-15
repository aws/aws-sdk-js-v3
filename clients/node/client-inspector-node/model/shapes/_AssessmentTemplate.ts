import { _AssessmentTemplateRulesPackageArnList } from "./_AssessmentTemplateRulesPackageArnList";
import { _UserAttributeList } from "./_UserAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssessmentTemplate: _Structure_ = {
  type: "structure",
  required: [
    "arn",
    "name",
    "assessmentTargetArn",
    "durationInSeconds",
    "rulesPackageArns",
    "userAttributesForFindings",
    "assessmentRunCount",
    "createdAt"
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
    assessmentTargetArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    durationInSeconds: {
      shape: {
        type: "integer",
        min: 180
      }
    },
    rulesPackageArns: {
      shape: _AssessmentTemplateRulesPackageArnList
    },
    userAttributesForFindings: {
      shape: _UserAttributeList
    },
    lastAssessmentRunArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    assessmentRunCount: {
      shape: {
        type: "integer"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
