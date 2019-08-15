import { DescribeNotificationsForBudgetInput } from "../shapes/DescribeNotificationsForBudgetInput";
import { DescribeNotificationsForBudgetOutput } from "../shapes/DescribeNotificationsForBudgetOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ExpiredNextTokenException } from "../shapes/ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
