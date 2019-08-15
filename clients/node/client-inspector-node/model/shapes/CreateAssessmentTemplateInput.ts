import { _AssessmentTemplateRulesPackageArnList } from "./_AssessmentTemplateRulesPackageArnList";
import { _UserAttributeList } from "./_UserAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAssessmentTemplateInput: _Structure_ = {
  type: "structure",
  required: [
    "assessmentTargetArn",
    "assessmentTemplateName",
    "durationInSeconds",
    "rulesPackageArns"
  ],
  members: {
    assessmentTargetArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    assessmentTemplateName: {
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
    }
  }
};
