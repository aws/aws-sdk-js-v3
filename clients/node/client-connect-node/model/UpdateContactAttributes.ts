import { UpdateContactAttributesInput } from "./UpdateContactAttributesInput";
import { UpdateContactAttributesOutput } from "./UpdateContactAttributesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
