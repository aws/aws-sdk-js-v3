import { PutRecordInput } from "../shapes/PutRecordInput";
import { PutRecordOutput } from "../shapes/PutRecordOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { KMSDisabledException } from "../shapes/KMSDisabledException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { KMSAccessDeniedException } from "../shapes/KMSAccessDeniedException";
import { KMSNotFoundException } from "../shapes/KMSNotFoundException";
import { KMSOptInRequired } from "../shapes/KMSOptInRequired";
import { KMSThrottlingException } from "../shapes/KMSThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutRecord: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutRecord",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutRecordInput
  },
  output: {
    shape: PutRecordOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ProvisionedThroughputExceededException
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
