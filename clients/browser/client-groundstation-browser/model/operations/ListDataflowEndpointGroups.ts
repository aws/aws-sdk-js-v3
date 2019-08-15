import { ListDataflowEndpointGroupsInput } from "../shapes/ListDataflowEndpointGroupsInput";
import { ListDataflowEndpointGroupsOutput } from "../shapes/ListDataflowEndpointGroupsOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
