import { GetFindingsInput } from "./GetFindingsInput";
import { GetFindingsOutput } from "./GetFindingsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
