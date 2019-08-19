import { GetContactAttributesInput } from "../shapes/GetContactAttributesInput";
import { GetContactAttributesOutput } from "../shapes/GetContactAttributesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetContactAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetContactAttributes",
  http: {
    method: "GET",
    requestUri: "/contact/attributes/{InstanceId}/{InitialContactId}"
  },
  input: {
    shape: GetContactAttributesInput
  },
  output: {
    shape: GetContactAttributesOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
