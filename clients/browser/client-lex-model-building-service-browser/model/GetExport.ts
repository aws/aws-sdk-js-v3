import { GetExportInput } from "./GetExportInput";
import { GetExportOutput } from "./GetExportOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetExport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetExport",
  http: {
    method: "GET",
    requestUri: "/exports/"
  },
  input: {
    shape: GetExportInput
  },
  output: {
    shape: GetExportOutput
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
