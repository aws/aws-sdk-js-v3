import { CreateResourceGroupInput } from "../shapes/CreateResourceGroupInput";
import { CreateResourceGroupOutput } from "../shapes/CreateResourceGroupOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
