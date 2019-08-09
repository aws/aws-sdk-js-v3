import { DescribeNotificationsForBudgetInput } from "./DescribeNotificationsForBudgetInput";
import { DescribeNotificationsForBudgetOutput } from "./DescribeNotificationsForBudgetOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeNotificationsForBudget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNotificationsForBudget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNotificationsForBudgetInput
  },
  output: {
    shape: DescribeNotificationsForBudgetOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ExpiredNextTokenException
    }
  ]
};
