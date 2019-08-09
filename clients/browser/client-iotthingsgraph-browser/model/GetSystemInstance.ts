import { GetSystemInstanceInput } from "./GetSystemInstanceInput";
import { GetSystemInstanceOutput } from "./GetSystemInstanceOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSystemInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSystemInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSystemInstanceInput
  },
  output: {
    shape: GetSystemInstanceOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
