import { UntagLogGroupInput } from "./UntagLogGroupInput";
import { UntagLogGroupOutput } from "./UntagLogGroupOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
