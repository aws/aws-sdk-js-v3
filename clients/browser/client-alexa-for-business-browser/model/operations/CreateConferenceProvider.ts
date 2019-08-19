import { CreateConferenceProviderInput } from "../shapes/CreateConferenceProviderInput";
import { CreateConferenceProviderOutput } from "../shapes/CreateConferenceProviderOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateConferenceProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConferenceProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateConferenceProviderInput
  },
  output: {
    shape: CreateConferenceProviderOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    }
  ]
};
