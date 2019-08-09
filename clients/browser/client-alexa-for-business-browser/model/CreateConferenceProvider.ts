import { CreateConferenceProviderInput } from "./CreateConferenceProviderInput";
import { CreateConferenceProviderOutput } from "./CreateConferenceProviderOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
