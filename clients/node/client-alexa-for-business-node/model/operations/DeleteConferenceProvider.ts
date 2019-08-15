import { DeleteConferenceProviderInput } from "../shapes/DeleteConferenceProviderInput";
import { DeleteConferenceProviderOutput } from "../shapes/DeleteConferenceProviderOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConferenceProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConferenceProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConferenceProviderInput
  },
  output: {
    shape: DeleteConferenceProviderOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
