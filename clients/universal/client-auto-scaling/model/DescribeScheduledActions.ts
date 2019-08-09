import { DescribeScheduledActionsInput } from "./DescribeScheduledActionsInput";
import { DescribeScheduledActionsOutput } from "./DescribeScheduledActionsOutput";
import { InvalidNextToken } from "./InvalidNextToken";
import { ResourceContentionFault } from "./ResourceContentionFault";
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
