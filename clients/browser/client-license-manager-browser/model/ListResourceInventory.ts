import { ListResourceInventoryInput } from "./ListResourceInventoryInput";
import { ListResourceInventoryOutput } from "./ListResourceInventoryOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalException } from "./ServerInternalException";
import { FilterLimitExceededException } from "./FilterLimitExceededException";
import { FailedDependencyException } from "./FailedDependencyException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
