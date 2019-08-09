import { GetDataflowEndpointGroupInput } from "./GetDataflowEndpointGroupInput";
import { GetDataflowEndpointGroupOutput } from "./GetDataflowEndpointGroupOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDataflowEndpointGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDataflowEndpointGroup",
  http: {
    method: "GET",
    requestUri: "/dataflowEndpointGroup/{dataflowEndpointGroupId}"
  },
  input: {
    shape: GetDataflowEndpointGroupInput
  },
  output: {
    shape: GetDataflowEndpointGroupOutput
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
