import { CreateSystemInstanceInput } from "../shapes/CreateSystemInstanceInput";
import { CreateSystemInstanceOutput } from "../shapes/CreateSystemInstanceOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSystemInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSystemInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSystemInstanceInput
  },
  output: {
    shape: CreateSystemInstanceOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: LimitExceededException
    }
  ]
};
