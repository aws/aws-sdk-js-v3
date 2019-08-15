import { ListResourceInventoryInput } from "../shapes/ListResourceInventoryInput";
import { ListResourceInventoryOutput } from "../shapes/ListResourceInventoryOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { FilterLimitExceededException } from "../shapes/FilterLimitExceededException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { AuthorizationException } from "../shapes/AuthorizationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { RateLimitExceededException } from "../shapes/RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResourceInventory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResourceInventory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResourceInventoryInput
  },
  output: {
    shape: ListResourceInventoryOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: FilterLimitExceededException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: AuthorizationException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: RateLimitExceededException
    }
  ]
};
