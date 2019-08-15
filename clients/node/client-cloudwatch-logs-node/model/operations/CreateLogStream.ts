import { CreateLogStreamInput } from "../shapes/CreateLogStreamInput";
import { CreateLogStreamOutput } from "../shapes/CreateLogStreamOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLogStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLogStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLogStreamInput
  },
  output: {
    shape: CreateLogStreamOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
