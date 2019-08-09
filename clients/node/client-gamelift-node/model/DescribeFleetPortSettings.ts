import { DescribeFleetPortSettingsInput } from "./DescribeFleetPortSettingsInput";
import { DescribeFleetPortSettingsOutput } from "./DescribeFleetPortSettingsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
