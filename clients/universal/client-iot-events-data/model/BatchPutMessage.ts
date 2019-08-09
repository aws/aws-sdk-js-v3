import { BatchPutMessageInput } from "./BatchPutMessageInput";
import { BatchPutMessageOutput } from "./BatchPutMessageOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
