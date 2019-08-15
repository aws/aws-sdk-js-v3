import { ListLaunchPathsInput } from "../shapes/ListLaunchPathsInput";
import { ListLaunchPathsOutput } from "../shapes/ListLaunchPathsOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
