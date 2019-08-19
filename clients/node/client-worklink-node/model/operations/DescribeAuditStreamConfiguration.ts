import { DescribeAuditStreamConfigurationInput } from "../shapes/DescribeAuditStreamConfigurationInput";
import { DescribeAuditStreamConfigurationOutput } from "../shapes/DescribeAuditStreamConfigurationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAuditStreamConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAuditStreamConfiguration",
  http: {
    method: "POST",
    requestUri: "/describeAuditStreamConfiguration"
  },
  input: {
    shape: DescribeAuditStreamConfigurationInput
  },
  output: {
    shape: DescribeAuditStreamConfigurationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
