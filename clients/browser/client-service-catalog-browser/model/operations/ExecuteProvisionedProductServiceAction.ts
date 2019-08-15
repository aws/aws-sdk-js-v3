import { ExecuteProvisionedProductServiceActionInput } from "../shapes/ExecuteProvisionedProductServiceActionInput";
import { ExecuteProvisionedProductServiceActionOutput } from "../shapes/ExecuteProvisionedProductServiceActionOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExecuteProvisionedProductServiceAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExecuteProvisionedProductServiceAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExecuteProvisionedProductServiceActionInput
  },
  output: {
    shape: ExecuteProvisionedProductServiceActionOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidStateException
    }
  ]
};
