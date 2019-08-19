import { CreateClusterInput } from "../shapes/CreateClusterInput";
import { CreateClusterOutput } from "../shapes/CreateClusterOutput";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { KMSRequestFailedException } from "../shapes/KMSRequestFailedException";
import { InvalidInputCombinationException } from "../shapes/InvalidInputCombinationException";
import { Ec2RequestFailedException } from "../shapes/Ec2RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateClusterInput
  },
  output: {
    shape: CreateClusterOutput
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
      shape: Ec2RequestFailedException
    }
  ]
};
