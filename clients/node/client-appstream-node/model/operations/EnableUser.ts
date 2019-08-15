import { EnableUserInput } from "../shapes/EnableUserInput";
import { EnableUserOutput } from "../shapes/EnableUserOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableUserInput
  },
  output: {
    shape: EnableUserOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidAccountStatusException
    }
  ]
};
