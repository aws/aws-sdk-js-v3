import { DescribePlatformVersionInput } from "../shapes/DescribePlatformVersionInput";
import { DescribePlatformVersionOutput } from "../shapes/DescribePlatformVersionOutput";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { ElasticBeanstalkServiceException } from "../shapes/ElasticBeanstalkServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePlatformVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePlatformVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePlatformVersionInput
  },
  output: {
    shape: DescribePlatformVersionOutput,
    resultWrapper: "DescribePlatformVersionResult"
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: ElasticBeanstalkServiceException
    }
  ]
};
