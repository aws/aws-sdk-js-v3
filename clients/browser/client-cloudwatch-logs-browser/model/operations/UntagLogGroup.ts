import { UntagLogGroupInput } from "../shapes/UntagLogGroupInput";
import { UntagLogGroupOutput } from "../shapes/UntagLogGroupOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagLogGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagLogGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagLogGroupInput
  },
  output: {
    shape: UntagLogGroupOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
