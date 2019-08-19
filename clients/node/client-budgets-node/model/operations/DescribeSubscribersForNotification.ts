import { DescribeSubscribersForNotificationInput } from "../shapes/DescribeSubscribersForNotificationInput";
import { DescribeSubscribersForNotificationOutput } from "../shapes/DescribeSubscribersForNotificationOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ExpiredNextTokenException } from "../shapes/ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSubscribersForNotification: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSubscribersForNotification",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSubscribersForNotificationInput
  },
  output: {
    shape: DescribeSubscribersForNotificationOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ExpiredNextTokenException
    }
  ]
};
