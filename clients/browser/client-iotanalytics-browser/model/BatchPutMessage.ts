import { BatchPutMessageInput } from "./BatchPutMessageInput";
import { BatchPutMessageOutput } from "./BatchPutMessageOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
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
    requestUri: "/messages/batch"
  },
  input: {
    shape: BatchPutMessageInput
  },
  output: {
    shape: BatchPutMessageOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
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
