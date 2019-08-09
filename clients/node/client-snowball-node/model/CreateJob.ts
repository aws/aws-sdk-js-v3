import { CreateJobInput } from "./CreateJobInput";
import { CreateJobOutput } from "./CreateJobOutput";
import { InvalidResourceException } from "./InvalidResourceException";
import { KMSRequestFailedException } from "./KMSRequestFailedException";
import { InvalidInputCombinationException } from "./InvalidInputCombinationException";
import { ClusterLimitExceededException } from "./ClusterLimitExceededException";
import { Ec2RequestFailedException } from "./Ec2RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
