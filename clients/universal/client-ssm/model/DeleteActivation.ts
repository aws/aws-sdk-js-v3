import { DeleteActivationInput } from "./DeleteActivationInput";
import { DeleteActivationOutput } from "./DeleteActivationOutput";
import { InvalidActivationId } from "./InvalidActivationId";
import { InvalidActivation } from "./InvalidActivation";
import { InternalServerError } from "./InternalServerError";
import { TooManyUpdates } from "./TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteActivation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteActivation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteActivationInput
  },
  output: {
    shape: DeleteActivationOutput
  },
  errors: [
    {
      shape: InvalidActivationId
    },
    {
      shape: InvalidActivation
    },
    {
      shape: InternalServerError
    },
    {
      shape: TooManyUpdates
    }
  ]
};
