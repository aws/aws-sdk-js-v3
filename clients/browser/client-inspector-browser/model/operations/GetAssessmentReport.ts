import { GetAssessmentReportInput } from "../shapes/GetAssessmentReportInput";
import { GetAssessmentReportOutput } from "../shapes/GetAssessmentReportOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { AssessmentRunInProgressException } from "../shapes/AssessmentRunInProgressException";
import { UnsupportedFeatureException } from "../shapes/UnsupportedFeatureException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
