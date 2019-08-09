import { DeleteParametersInput } from "./DeleteParametersInput";
import { DeleteParametersOutput } from "./DeleteParametersOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteParametersInput
  },
  output: {
    shape: DeleteParametersOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
