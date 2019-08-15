import { UpdateServiceActionInput } from "../shapes/UpdateServiceActionInput";
import { UpdateServiceActionOutput } from "../shapes/UpdateServiceActionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateServiceAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateServiceAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateServiceActionInput
  },
  output: {
    shape: UpdateServiceActionOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
