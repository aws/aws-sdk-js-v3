import { TagLogGroupInput } from "./TagLogGroupInput";
import { TagLogGroupOutput } from "./TagLogGroupOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TagLogGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagLogGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagLogGroupInput
  },
  output: {
    shape: TagLogGroupOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
