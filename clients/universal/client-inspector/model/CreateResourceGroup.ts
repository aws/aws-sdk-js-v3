import { CreateResourceGroupInput } from "./CreateResourceGroupInput";
import { CreateResourceGroupOutput } from "./CreateResourceGroupOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateResourceGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResourceGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateResourceGroupInput
  },
  output: {
    shape: CreateResourceGroupOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ServiceTemporarilyUnavailableException
    }
  ]
};
