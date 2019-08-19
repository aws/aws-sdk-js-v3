import { CreateImageBuilderStreamingURLInput } from "../shapes/CreateImageBuilderStreamingURLInput";
import { CreateImageBuilderStreamingURLOutput } from "../shapes/CreateImageBuilderStreamingURLOutput";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateImageBuilderStreamingURL: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateImageBuilderStreamingURL",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateImageBuilderStreamingURLInput
  },
  output: {
    shape: CreateImageBuilderStreamingURLOutput
  },
  errors: [
    {
      shape: OperationNotPermittedException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
