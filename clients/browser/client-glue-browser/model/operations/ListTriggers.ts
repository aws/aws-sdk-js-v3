import { ListTriggersInput } from "../shapes/ListTriggersInput";
import { ListTriggersOutput } from "../shapes/ListTriggersOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTriggers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTriggers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTriggersInput
  },
  output: {
    shape: ListTriggersOutput
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
