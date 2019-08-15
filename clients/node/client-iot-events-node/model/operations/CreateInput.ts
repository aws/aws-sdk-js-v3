import { CreateInputInput } from "../shapes/CreateInputInput";
import { CreateInputOutput } from "../shapes/CreateInputOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
