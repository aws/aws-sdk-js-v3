import { GetTriggersInput } from "./GetTriggersInput";
import { GetTriggersOutput } from "./GetTriggersOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
