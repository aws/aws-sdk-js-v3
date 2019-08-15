import { CancelJobInput } from "../shapes/CancelJobInput";
import { CancelJobOutput } from "../shapes/CancelJobOutput";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { InvalidJobStateException } from "../shapes/InvalidJobStateException";
import { KMSRequestFailedException } from "../shapes/KMSRequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelJobInput
  },
  output: {
    shape: CancelJobOutput
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
    }
  ]
};
