import { AssociateTargetsWithJobInput } from "./AssociateTargetsWithJobInput";
import { AssociateTargetsWithJobOutput } from "./AssociateTargetsWithJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
