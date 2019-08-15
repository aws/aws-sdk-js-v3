import { DeleteActivationInput } from "../shapes/DeleteActivationInput";
import { DeleteActivationOutput } from "../shapes/DeleteActivationOutput";
import { InvalidActivationId } from "../shapes/InvalidActivationId";
import { InvalidActivation } from "../shapes/InvalidActivation";
import { InternalServerError } from "../shapes/InternalServerError";
import { TooManyUpdates } from "../shapes/TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
