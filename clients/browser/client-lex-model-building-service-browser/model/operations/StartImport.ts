import { StartImportInput } from "../shapes/StartImportInput";
import { StartImportOutput } from "../shapes/StartImportOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartImport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartImport",
  http: {
    method: "POST",
    requestUri: "/imports/"
  },
  input: {
    shape: StartImportInput
  },
  output: {
    shape: StartImportOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: BadRequestException
    }
  ]
};
