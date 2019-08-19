import { StartStreamEncryptionInput } from "../shapes/StartStreamEncryptionInput";
import { StartStreamEncryptionOutput } from "../shapes/StartStreamEncryptionOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { KMSDisabledException } from "../shapes/KMSDisabledException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { KMSAccessDeniedException } from "../shapes/KMSAccessDeniedException";
import { KMSNotFoundException } from "../shapes/KMSNotFoundException";
import { KMSOptInRequired } from "../shapes/KMSOptInRequired";
import { KMSThrottlingException } from "../shapes/KMSThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartStreamEncryption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartStreamEncryption",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartStreamEncryptionInput
  },
  output: {
    shape: StartStreamEncryptionOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: KMSDisabledException
    },
    {
      shape: KMSInvalidStateException
    },
    {
      shape: KMSAccessDeniedException
    },
    {
      shape: KMSNotFoundException
    },
    {
      shape: KMSOptInRequired
    },
    {
      shape: KMSThrottlingException
    }
  ]
};
