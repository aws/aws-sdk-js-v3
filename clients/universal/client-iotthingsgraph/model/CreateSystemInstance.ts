import { CreateSystemInstanceInput } from "./CreateSystemInstanceInput";
import { CreateSystemInstanceOutput } from "./CreateSystemInstanceOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
