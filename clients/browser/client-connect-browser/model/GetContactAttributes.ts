import { GetContactAttributesInput } from "./GetContactAttributesInput";
import { GetContactAttributesOutput } from "./GetContactAttributesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
