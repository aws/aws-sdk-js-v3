import { GetFindingsInput } from "../shapes/GetFindingsInput";
import { GetFindingsOutput } from "../shapes/GetFindingsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFindings",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/findings/get"
  },
  input: {
    shape: GetFindingsInput
  },
  output: {
    shape: GetFindingsOutput
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
