import { DeleteStreamInput } from "../shapes/DeleteStreamInput";
import { DeleteStreamOutput } from "../shapes/DeleteStreamOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteStreamInput
  },
  output: {
    shape: DeleteStreamOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
