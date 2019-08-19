import { CreateAcceleratorInput } from "../shapes/CreateAcceleratorInput";
import { CreateAcceleratorOutput } from "../shapes/CreateAcceleratorOutput";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
