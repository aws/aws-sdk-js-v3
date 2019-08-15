import { DeletePipelineInput } from "../shapes/DeletePipelineInput";
import { DeletePipelineOutput } from "../shapes/DeletePipelineOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePipeline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePipelineInput
  },
  output: {
    shape: DeletePipelineOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
