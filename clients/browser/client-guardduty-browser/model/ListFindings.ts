import { ListFindingsInput } from "./ListFindingsInput";
import { ListFindingsOutput } from "./ListFindingsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
