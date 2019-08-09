import { UpdateClusterInput } from "./UpdateClusterInput";
import { UpdateClusterOutput } from "./UpdateClusterOutput";
import { InvalidResourceException } from "./InvalidResourceException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { KMSRequestFailedException } from "./KMSRequestFailedException";
import { InvalidInputCombinationException } from "./InvalidInputCombinationException";
import { Ec2RequestFailedException } from "./Ec2RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
