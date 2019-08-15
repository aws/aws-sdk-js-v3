import { ListConfigsInput } from "../shapes/ListConfigsInput";
import { ListConfigsOutput } from "../shapes/ListConfigsOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListConfigs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConfigs",
  http: {
    method: "GET",
    requestUri: "/config"
  },
  input: {
    shape: ListConfigsInput
  },
  output: {
    shape: ListConfigsOutput
  },
  errors: [
    {
      shape: DependencyException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
