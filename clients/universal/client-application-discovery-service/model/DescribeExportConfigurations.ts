import { DescribeExportConfigurationsInput } from "./DescribeExportConfigurationsInput";
import { DescribeExportConfigurationsOutput } from "./DescribeExportConfigurationsOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
