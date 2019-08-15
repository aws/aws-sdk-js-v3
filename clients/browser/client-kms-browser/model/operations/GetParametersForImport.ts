import { GetParametersForImportInput } from "../shapes/GetParametersForImportInput";
import { GetParametersForImportOutput } from "../shapes/GetParametersForImportOutput";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { NotFoundException } from "../shapes/NotFoundException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetParametersForImport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetParametersForImport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetParametersForImportInput
  },
  output: {
    shape: GetParametersForImportOutput
  },
  errors: [
    {
      shape: InvalidArnException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: NotFoundException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
