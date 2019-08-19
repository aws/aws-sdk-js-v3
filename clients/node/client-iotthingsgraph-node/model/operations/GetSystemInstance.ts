import { GetSystemInstanceInput } from "../shapes/GetSystemInstanceInput";
import { GetSystemInstanceOutput } from "../shapes/GetSystemInstanceOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
