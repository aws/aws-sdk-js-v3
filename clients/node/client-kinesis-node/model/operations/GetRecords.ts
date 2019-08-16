import { GetRecordsInput } from "../shapes/GetRecordsInput";
import { GetRecordsOutput } from "../shapes/GetRecordsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ExpiredIteratorException } from "../shapes/ExpiredIteratorException";
import { KMSDisabledException } from "../shapes/KMSDisabledException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { KMSAccessDeniedException } from "../shapes/KMSAccessDeniedException";
import { KMSNotFoundException } from "../shapes/KMSNotFoundException";
import { KMSOptInRequired } from "../shapes/KMSOptInRequired";
import { KMSThrottlingException } from "../shapes/KMSThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRecords: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRecords",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRecordsInput
  },
  output: {
    shape: GetRecordsOutput
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
      shape: ExpiredIteratorException
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
