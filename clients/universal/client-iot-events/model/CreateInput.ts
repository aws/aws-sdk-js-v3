import { CreateInputInput } from "./CreateInputInput";
import { CreateInputOutput } from "./CreateInputOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateInput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateInput",
  http: {
    method: "POST",
    requestUri: "/inputs"
  },
  input: {
    shape: CreateInputInput
  },
  output: {
    shape: CreateInputOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ResourceAlreadyExistsException
    }
  ]
};
