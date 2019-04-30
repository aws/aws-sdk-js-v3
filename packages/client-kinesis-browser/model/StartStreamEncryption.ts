import { StartStreamEncryptionInput } from "./StartStreamEncryptionInput";
import { StartStreamEncryptionOutput } from "./StartStreamEncryptionOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { KMSDisabledException } from "./KMSDisabledException";
import { KMSInvalidStateException } from "./KMSInvalidStateException";
import { KMSAccessDeniedException } from "./KMSAccessDeniedException";
import { KMSNotFoundException } from "./KMSNotFoundException";
import { KMSOptInRequired } from "./KMSOptInRequired";
import { KMSThrottlingException } from "./KMSThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
