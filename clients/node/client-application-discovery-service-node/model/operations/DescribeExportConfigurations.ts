import { DescribeExportConfigurationsInput } from "../shapes/DescribeExportConfigurationsInput";
import { DescribeExportConfigurationsOutput } from "../shapes/DescribeExportConfigurationsOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeExportConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeExportConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeExportConfigurationsInput
  },
  output: {
    shape: DescribeExportConfigurationsOutput
  },
  errors: [
    {
      shape: AuthorizationErrorException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    }
  ]
};
