import { CancelClusterInput } from "./CancelClusterInput";
import { CancelClusterOutput } from "./CancelClusterOutput";
import { KMSRequestFailedException } from "./KMSRequestFailedException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { InvalidResourceException } from "./InvalidResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
