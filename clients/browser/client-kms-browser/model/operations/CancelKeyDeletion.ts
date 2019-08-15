import { CancelKeyDeletionInput } from "../shapes/CancelKeyDeletionInput";
import { CancelKeyDeletionOutput } from "../shapes/CancelKeyDeletionOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelKeyDeletion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelKeyDeletion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelKeyDeletionInput
  },
  output: {
    shape: CancelKeyDeletionOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
