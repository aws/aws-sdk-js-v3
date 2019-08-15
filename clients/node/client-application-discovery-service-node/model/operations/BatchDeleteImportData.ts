import { BatchDeleteImportDataInput } from "../shapes/BatchDeleteImportDataInput";
import { BatchDeleteImportDataOutput } from "../shapes/BatchDeleteImportDataOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
