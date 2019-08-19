import { AssociateTargetsWithJobInput } from "../shapes/AssociateTargetsWithJobInput";
import { AssociateTargetsWithJobOutput } from "../shapes/AssociateTargetsWithJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateTargetsWithJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateTargetsWithJob",
  http: {
    method: "POST",
    requestUri: "/jobs/{jobId}/targets"
  },
  input: {
    shape: AssociateTargetsWithJobInput
  },
  output: {
    shape: AssociateTargetsWithJobOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
