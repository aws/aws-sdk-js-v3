import { UpdateServiceActionInput } from "./UpdateServiceActionInput";
import { UpdateServiceActionOutput } from "./UpdateServiceActionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
