import { GetDataflowEndpointGroupInput } from "../shapes/GetDataflowEndpointGroupInput";
import { GetDataflowEndpointGroupOutput } from "../shapes/GetDataflowEndpointGroupOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
