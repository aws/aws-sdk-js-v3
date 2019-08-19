import { DescribeFleetPortSettingsInput } from "../shapes/DescribeFleetPortSettingsInput";
import { DescribeFleetPortSettingsOutput } from "../shapes/DescribeFleetPortSettingsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFleetPortSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFleetPortSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFleetPortSettingsInput
  },
  output: {
    shape: DescribeFleetPortSettingsOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
