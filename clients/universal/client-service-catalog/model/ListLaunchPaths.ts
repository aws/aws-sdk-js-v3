import { ListLaunchPathsInput } from "./ListLaunchPathsInput";
import { ListLaunchPathsOutput } from "./ListLaunchPathsOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListLaunchPaths: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLaunchPaths",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListLaunchPathsInput
  },
  output: {
    shape: ListLaunchPathsOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
