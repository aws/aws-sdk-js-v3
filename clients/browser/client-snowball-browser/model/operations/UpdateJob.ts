import { UpdateJobInput } from "../shapes/UpdateJobInput";
import { UpdateJobOutput } from "../shapes/UpdateJobOutput";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { InvalidJobStateException } from "../shapes/InvalidJobStateException";
import { KMSRequestFailedException } from "../shapes/KMSRequestFailedException";
import { InvalidInputCombinationException } from "../shapes/InvalidInputCombinationException";
import { ClusterLimitExceededException } from "../shapes/ClusterLimitExceededException";
import { Ec2RequestFailedException } from "../shapes/Ec2RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateJobInput
  },
  output: {
    shape: UpdateJobOutput
  },
  errors: [
    {
      shape: InvalidResourceException
    },
    {
      shape: InvalidJobStateException
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
