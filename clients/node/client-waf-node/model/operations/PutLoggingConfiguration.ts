import { PutLoggingConfigurationInput } from "../shapes/PutLoggingConfigurationInput";
import { PutLoggingConfigurationOutput } from "../shapes/PutLoggingConfigurationOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFServiceLinkedRoleErrorException } from "../shapes/WAFServiceLinkedRoleErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutLoggingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutLoggingConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutLoggingConfigurationInput
  },
  output: {
    shape: PutLoggingConfigurationOutput
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
    },
    {
      shape: WAFServiceLinkedRoleErrorException
    }
  ]
};
