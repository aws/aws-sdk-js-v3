import { DescribeSubscribersForNotificationInput } from "./DescribeSubscribersForNotificationInput";
import { DescribeSubscribersForNotificationOutput } from "./DescribeSubscribersForNotificationOutput";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
