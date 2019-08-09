import { GetImportInput } from "./GetImportInput";
import { GetImportOutput } from "./GetImportOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
