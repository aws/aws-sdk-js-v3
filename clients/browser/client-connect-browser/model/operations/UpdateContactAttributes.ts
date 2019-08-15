import { UpdateContactAttributesInput } from "../shapes/UpdateContactAttributesInput";
import { UpdateContactAttributesOutput } from "../shapes/UpdateContactAttributesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateContactAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateContactAttributes",
  http: {
    method: "POST",
    requestUri: "/contact/attributes"
  },
  input: {
    shape: UpdateContactAttributesInput
  },
  output: {
    shape: UpdateContactAttributesOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
