import { DescribeScheduledActionsInput } from "./DescribeScheduledActionsInput";
import { DescribeScheduledActionsOutput } from "./DescribeScheduledActionsOutput";
import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
