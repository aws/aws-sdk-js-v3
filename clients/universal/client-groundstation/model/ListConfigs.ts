import { ListConfigsInput } from "./ListConfigsInput";
import { ListConfigsOutput } from "./ListConfigsOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
