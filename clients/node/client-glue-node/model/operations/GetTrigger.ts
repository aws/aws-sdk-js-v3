import { GetTriggerInput } from "../shapes/GetTriggerInput";
import { GetTriggerOutput } from "../shapes/GetTriggerOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
