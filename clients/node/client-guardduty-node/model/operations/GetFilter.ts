import { GetFilterInput } from "../shapes/GetFilterInput";
import { GetFilterOutput } from "../shapes/GetFilterOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFilter",
  http: {
    method: "GET",
    requestUri: "/detector/{detectorId}/filter/{filterName}"
  },
  input: {
    shape: GetFilterInput
  },
  output: {
    shape: GetFilterOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
