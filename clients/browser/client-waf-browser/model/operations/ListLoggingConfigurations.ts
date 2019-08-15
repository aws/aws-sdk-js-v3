import { ListLoggingConfigurationsInput } from "../shapes/ListLoggingConfigurationsInput";
import { ListLoggingConfigurationsOutput } from "../shapes/ListLoggingConfigurationsOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListLoggingConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLoggingConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListLoggingConfigurationsInput
  },
  output: {
    shape: ListLoggingConfigurationsOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFInvalidParameterException
    }
  ]
};
