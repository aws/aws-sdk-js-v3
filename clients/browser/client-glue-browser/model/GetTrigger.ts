import { GetTriggerInput } from "./GetTriggerInput";
import { GetTriggerOutput } from "./GetTriggerOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTrigger: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTrigger",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTriggerInput
  },
  output: {
    shape: GetTriggerOutput
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
