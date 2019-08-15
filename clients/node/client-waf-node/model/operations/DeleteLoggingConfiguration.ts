import { DeleteLoggingConfigurationInput } from "../shapes/DeleteLoggingConfigurationInput";
import { DeleteLoggingConfigurationOutput } from "../shapes/DeleteLoggingConfigurationOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
