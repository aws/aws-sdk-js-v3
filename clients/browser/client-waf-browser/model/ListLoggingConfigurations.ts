import { ListLoggingConfigurationsInput } from "./ListLoggingConfigurationsInput";
import { ListLoggingConfigurationsOutput } from "./ListLoggingConfigurationsOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
