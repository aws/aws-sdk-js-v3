import { GetLoggingConfigurationInput } from "./GetLoggingConfigurationInput";
import { GetLoggingConfigurationOutput } from "./GetLoggingConfigurationOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetLoggingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLoggingConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetLoggingConfigurationInput
  },
  output: {
    shape: GetLoggingConfigurationOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFNonexistentItemException
    }
  ]
};
