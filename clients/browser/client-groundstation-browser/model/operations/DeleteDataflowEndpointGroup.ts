import { DeleteDataflowEndpointGroupInput } from "../shapes/DeleteDataflowEndpointGroupInput";
import { DeleteDataflowEndpointGroupOutput } from "../shapes/DeleteDataflowEndpointGroupOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDataflowEndpointGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDataflowEndpointGroup",
  http: {
    method: "DELETE",
    requestUri: "/dataflowEndpointGroup/{dataflowEndpointGroupId}"
  },
  input: {
    shape: DeleteDataflowEndpointGroupInput
  },
  output: {
    shape: DeleteDataflowEndpointGroupOutput
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
