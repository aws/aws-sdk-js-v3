import { ResendValidationEmailInput } from "./ResendValidationEmailInput";
import { ResendValidationEmailOutput } from "./ResendValidationEmailOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidDomainValidationOptionsException } from "./InvalidDomainValidationOptionsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
