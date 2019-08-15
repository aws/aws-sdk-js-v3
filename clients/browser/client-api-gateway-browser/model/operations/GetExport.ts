import { GetExportInput } from "../shapes/GetExportInput";
import { GetExportOutput } from "../shapes/GetExportOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetExport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetExport",
  http: {
    method: "GET",
    requestUri:
      "/restapis/{restapi_id}/stages/{stage_name}/exports/{export_type}"
  },
  input: {
    shape: GetExportInput
  },
  output: {
    shape: GetExportOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
