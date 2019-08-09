import { DeleteLoggingConfigurationInput } from "./DeleteLoggingConfigurationInput";
import { DeleteLoggingConfigurationOutput } from "./DeleteLoggingConfigurationOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteLoggingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLoggingConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLoggingConfigurationInput
  },
  output: {
    shape: DeleteLoggingConfigurationOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFStaleDataException
    }
  ]
};
