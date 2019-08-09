import { DeleteDataflowEndpointGroupInput } from "./DeleteDataflowEndpointGroupInput";
import { DeleteDataflowEndpointGroupOutput } from "./DeleteDataflowEndpointGroupOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
