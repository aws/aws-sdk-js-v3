import { ListTriggersInput } from "./ListTriggersInput";
import { ListTriggersOutput } from "./ListTriggersOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
