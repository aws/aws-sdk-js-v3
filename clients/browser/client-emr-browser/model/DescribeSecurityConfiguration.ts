import { DescribeSecurityConfigurationInput } from "./DescribeSecurityConfigurationInput";
import { DescribeSecurityConfigurationOutput } from "./DescribeSecurityConfigurationOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
