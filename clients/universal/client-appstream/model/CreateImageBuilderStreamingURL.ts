import { CreateImageBuilderStreamingURLInput } from "./CreateImageBuilderStreamingURLInput";
import { CreateImageBuilderStreamingURLOutput } from "./CreateImageBuilderStreamingURLOutput";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
