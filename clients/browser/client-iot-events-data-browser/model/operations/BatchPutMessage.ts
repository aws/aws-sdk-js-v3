import { BatchPutMessageInput } from "../shapes/BatchPutMessageInput";
import { BatchPutMessageOutput } from "../shapes/BatchPutMessageOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchPutMessage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchPutMessage",
  http: {
    method: "POST",
    requestUri: "/inputs/messages"
  },
  input: {
    shape: BatchPutMessageInput
  },
  output: {
    shape: BatchPutMessageOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    }
  ]
};
