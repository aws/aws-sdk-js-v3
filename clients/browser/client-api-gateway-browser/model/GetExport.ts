import { GetExportInput } from "./GetExportInput";
import { GetExportOutput } from "./GetExportOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
