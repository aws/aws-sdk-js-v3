import { PutKeyPolicyInput } from "../shapes/PutKeyPolicyInput";
import { PutKeyPolicyOutput } from "../shapes/PutKeyPolicyOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutKeyPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutKeyPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutKeyPolicyInput
  },
  output: {
    shape: PutKeyPolicyOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: MalformedPolicyDocumentException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
