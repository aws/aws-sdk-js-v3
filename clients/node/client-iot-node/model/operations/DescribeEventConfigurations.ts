import { DescribeEventConfigurationsInput } from "../shapes/DescribeEventConfigurationsInput";
import { DescribeEventConfigurationsOutput } from "../shapes/DescribeEventConfigurationsOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEventConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEventConfigurations",
  http: {
    method: "GET",
    requestUri: "/event-configurations"
  },
  input: {
    shape: DescribeEventConfigurationsInput
  },
  output: {
    shape: DescribeEventConfigurationsOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: ThrottlingException
    }
  ]
};
