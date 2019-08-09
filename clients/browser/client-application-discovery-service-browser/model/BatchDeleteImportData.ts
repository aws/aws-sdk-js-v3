import { BatchDeleteImportDataInput } from "./BatchDeleteImportDataInput";
import { BatchDeleteImportDataOutput } from "./BatchDeleteImportDataOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchDeleteImportData: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDeleteImportData",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDeleteImportDataInput
  },
  output: {
    shape: BatchDeleteImportDataOutput
  },
  errors: [
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    }
  ]
};
