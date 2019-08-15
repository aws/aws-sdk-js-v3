import { CancelClusterInput } from "../shapes/CancelClusterInput";
import { CancelClusterOutput } from "../shapes/CancelClusterOutput";
import { KMSRequestFailedException } from "../shapes/KMSRequestFailedException";
import { InvalidJobStateException } from "../shapes/InvalidJobStateException";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelClusterInput
  },
  output: {
    shape: CancelClusterOutput
  },
  errors: [
    {
      shape: KMSRequestFailedException
    },
    {
      shape: InvalidJobStateException
    },
    {
      shape: InvalidResourceException
    }
  ]
};
