import { ListFindingsInput } from "../shapes/ListFindingsInput";
import { ListFindingsOutput } from "../shapes/ListFindingsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFindings",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/findings"
  },
  input: {
    shape: ListFindingsInput
  },
  output: {
    shape: ListFindingsOutput
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
