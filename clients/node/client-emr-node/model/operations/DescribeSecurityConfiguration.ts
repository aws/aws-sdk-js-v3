import { DescribeSecurityConfigurationInput } from "../shapes/DescribeSecurityConfigurationInput";
import { DescribeSecurityConfigurationOutput } from "../shapes/DescribeSecurityConfigurationOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSecurityConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSecurityConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSecurityConfigurationInput
  },
  output: {
    shape: DescribeSecurityConfigurationOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
