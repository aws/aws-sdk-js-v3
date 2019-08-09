import { CreateLogStreamInput } from "./CreateLogStreamInput";
import { CreateLogStreamOutput } from "./CreateLogStreamOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
