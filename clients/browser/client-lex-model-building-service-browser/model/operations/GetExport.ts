import { GetExportInput } from "../shapes/GetExportInput";
import { GetExportOutput } from "../shapes/GetExportOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
