import { StartImportInput } from "./StartImportInput";
import { StartImportOutput } from "./StartImportOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
