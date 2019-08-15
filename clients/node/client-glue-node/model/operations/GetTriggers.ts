import { GetTriggersInput } from "../shapes/GetTriggersInput";
import { GetTriggersOutput } from "../shapes/GetTriggersOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetTriggers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTriggers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTriggersInput
  },
  output: {
    shape: GetTriggersOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
