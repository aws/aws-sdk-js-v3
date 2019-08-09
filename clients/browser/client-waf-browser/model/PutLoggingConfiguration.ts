import { PutLoggingConfigurationInput } from "./PutLoggingConfigurationInput";
import { PutLoggingConfigurationOutput } from "./PutLoggingConfigurationOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFServiceLinkedRoleErrorException } from "./WAFServiceLinkedRoleErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
