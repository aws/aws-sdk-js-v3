import { UpdateJobInput } from "./UpdateJobInput";
import { UpdateJobOutput } from "./UpdateJobOutput";
import { InvalidResourceException } from "./InvalidResourceException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { KMSRequestFailedException } from "./KMSRequestFailedException";
import { InvalidInputCombinationException } from "./InvalidInputCombinationException";
import { ClusterLimitExceededException } from "./ClusterLimitExceededException";
import { Ec2RequestFailedException } from "./Ec2RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
