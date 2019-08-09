import { GetAssessmentReportInput } from "./GetAssessmentReportInput";
import { GetAssessmentReportOutput } from "./GetAssessmentReportOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { AssessmentRunInProgressException } from "./AssessmentRunInProgressException";
import { UnsupportedFeatureException } from "./UnsupportedFeatureException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAssessmentReport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAssessmentReport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAssessmentReportInput
  },
  output: {
    shape: GetAssessmentReportOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: AssessmentRunInProgressException
    },
    {
      shape: UnsupportedFeatureException
    },
    {
      shape: ServiceTemporarilyUnavailableException
    }
  ]
};
