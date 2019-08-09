import { DeleteParameterInput } from "./DeleteParameterInput";
import { DeleteParameterOutput } from "./DeleteParameterOutput";
import { InternalServerError } from "./InternalServerError";
import { ParameterNotFound } from "./ParameterNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
