import { ResendValidationEmailInput } from "../shapes/ResendValidationEmailInput";
import { ResendValidationEmailOutput } from "../shapes/ResendValidationEmailOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidDomainValidationOptionsException } from "../shapes/InvalidDomainValidationOptionsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResendValidationEmail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResendValidationEmail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResendValidationEmailInput
  },
  output: {
    shape: ResendValidationEmailOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidDomainValidationOptionsException
    }
  ]
};
