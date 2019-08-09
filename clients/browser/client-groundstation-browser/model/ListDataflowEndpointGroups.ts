import { ListDataflowEndpointGroupsInput } from "./ListDataflowEndpointGroupsInput";
import { ListDataflowEndpointGroupsOutput } from "./ListDataflowEndpointGroupsOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDataflowEndpointGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDataflowEndpointGroups",
  http: {
    method: "GET",
    requestUri: "/dataflowEndpointGroup"
  },
  input: {
    shape: ListDataflowEndpointGroupsInput
  },
  output: {
    shape: ListDataflowEndpointGroupsOutput
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
