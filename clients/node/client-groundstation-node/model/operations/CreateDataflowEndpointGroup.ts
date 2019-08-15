import { CreateDataflowEndpointGroupInput } from "../shapes/CreateDataflowEndpointGroupInput";
import { CreateDataflowEndpointGroupOutput } from "../shapes/CreateDataflowEndpointGroupOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDataflowEndpointGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDataflowEndpointGroup",
  http: {
    method: "POST",
    requestUri: "/dataflowEndpointGroup"
  },
  input: {
    shape: CreateDataflowEndpointGroupInput
  },
  output: {
    shape: CreateDataflowEndpointGroupOutput
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
