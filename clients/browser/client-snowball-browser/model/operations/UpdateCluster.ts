import { UpdateClusterInput } from "../shapes/UpdateClusterInput";
import { UpdateClusterOutput } from "../shapes/UpdateClusterOutput";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { InvalidJobStateException } from "../shapes/InvalidJobStateException";
import { KMSRequestFailedException } from "../shapes/KMSRequestFailedException";
import { InvalidInputCombinationException } from "../shapes/InvalidInputCombinationException";
import { Ec2RequestFailedException } from "../shapes/Ec2RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateClusterInput
  },
  output: {
    shape: UpdateClusterOutput
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
      shape: Ec2RequestFailedException
    }
  ]
};
