import { DeleteParameterInput } from "../shapes/DeleteParameterInput";
import { DeleteParameterOutput } from "../shapes/DeleteParameterOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { ParameterNotFound } from "../shapes/ParameterNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteParameter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteParameter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteParameterInput
  },
  output: {
    shape: DeleteParameterOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: ParameterNotFound
    }
  ]
};
