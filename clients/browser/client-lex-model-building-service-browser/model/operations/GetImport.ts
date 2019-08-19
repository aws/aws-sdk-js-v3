import { GetImportInput } from "../shapes/GetImportInput";
import { GetImportOutput } from "../shapes/GetImportOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetImport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetImport",
  http: {
    method: "GET",
    requestUri: "/imports/{importId}"
  },
  input: {
    shape: GetImportInput
  },
  output: {
    shape: GetImportOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
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
