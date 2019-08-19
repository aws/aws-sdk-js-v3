import { StopAssessmentRunInput } from "../shapes/StopAssessmentRunInput";
import { StopAssessmentRunOutput } from "../shapes/StopAssessmentRunOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopAssessmentRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopAssessmentRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopAssessmentRunInput
  },
  output: {
    shape: StopAssessmentRunOutput
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
      shape: ServiceTemporarilyUnavailableException
    }
  ]
};
