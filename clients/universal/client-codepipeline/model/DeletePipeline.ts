import { DeletePipelineInput } from "./DeletePipelineInput";
import { DeletePipelineOutput } from "./DeletePipelineOutput";
import { ValidationException } from "./ValidationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
