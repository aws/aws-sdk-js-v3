import { StopAssessmentRunInput } from "./StopAssessmentRunInput";
import { StopAssessmentRunOutput } from "./StopAssessmentRunOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
