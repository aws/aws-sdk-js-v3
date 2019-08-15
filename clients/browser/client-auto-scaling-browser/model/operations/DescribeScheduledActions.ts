import { DescribeScheduledActionsInput } from "../shapes/DescribeScheduledActionsInput";
import { DescribeScheduledActionsOutput } from "../shapes/DescribeScheduledActionsOutput";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
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
    shape: DescribeScheduledActionsOutput,
    resultWrapper: "DescribeScheduledActionsResult"
  },
  errors: [
    {
      shape: InvalidNextToken
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
