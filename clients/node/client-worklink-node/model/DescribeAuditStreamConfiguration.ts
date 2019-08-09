import { DescribeAuditStreamConfigurationInput } from "./DescribeAuditStreamConfigurationInput";
import { DescribeAuditStreamConfigurationOutput } from "./DescribeAuditStreamConfigurationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
