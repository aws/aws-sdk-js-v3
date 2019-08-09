import { CreateDataflowEndpointGroupInput } from "./CreateDataflowEndpointGroupInput";
import { CreateDataflowEndpointGroupOutput } from "./CreateDataflowEndpointGroupOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
