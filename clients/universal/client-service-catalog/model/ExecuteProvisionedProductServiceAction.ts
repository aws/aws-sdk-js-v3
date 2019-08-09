import { ExecuteProvisionedProductServiceActionInput } from "./ExecuteProvisionedProductServiceActionInput";
import { ExecuteProvisionedProductServiceActionOutput } from "./ExecuteProvisionedProductServiceActionOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
