import { DescribeListenerInput } from "./DescribeListenerInput";
import { DescribeListenerOutput } from "./DescribeListenerOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeListener: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeListener",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeListenerInput
  },
  output: {
    shape: DescribeListenerOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: ListenerNotFoundException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
