import { DescribeScheduledActionsInput } from "../shapes/DescribeScheduledActionsInput";
import { DescribeScheduledActionsOutput } from "../shapes/DescribeScheduledActionsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeScheduledActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScheduledActions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeScheduledActionsInput
  },
  output: {
    shape: DescribeScheduledActionsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ConcurrentUpdateException
    },
    {
      shape: InternalServiceException
    }
  ]
};
