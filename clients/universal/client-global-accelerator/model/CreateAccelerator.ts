import { CreateAcceleratorInput } from "./CreateAcceleratorInput";
import { CreateAcceleratorOutput } from "./CreateAcceleratorOutput";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateAccelerator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAccelerator",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAcceleratorInput
  },
  output: {
    shape: CreateAcceleratorOutput
  },
  errors: [
    {
      shape: InternalServiceErrorException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    }
  ]
};
