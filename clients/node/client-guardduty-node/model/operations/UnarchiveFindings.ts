import { UnarchiveFindingsInput } from "../shapes/UnarchiveFindingsInput";
import { UnarchiveFindingsOutput } from "../shapes/UnarchiveFindingsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UnarchiveFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UnarchiveFindings",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/findings/unarchive"
  },
  input: {
    shape: UnarchiveFindingsInput
  },
  output: {
    shape: UnarchiveFindingsOutput
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
