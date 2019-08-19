import { CreateJobInput } from "../shapes/CreateJobInput";
import { CreateJobOutput } from "../shapes/CreateJobOutput";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { KMSRequestFailedException } from "../shapes/KMSRequestFailedException";
import { InvalidInputCombinationException } from "../shapes/InvalidInputCombinationException";
import { ClusterLimitExceededException } from "../shapes/ClusterLimitExceededException";
import { Ec2RequestFailedException } from "../shapes/Ec2RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateJobInput
  },
  output: {
    shape: CreateJobOutput
  },
  errors: [
    {
      shape: InvalidResourceException
    },
    {
      shape: KMSRequestFailedException
    },
    {
      shape: InvalidInputCombinationException
    },
    {
      shape: ClusterLimitExceededException
    },
    {
      shape: Ec2RequestFailedException
    }
  ]
};
