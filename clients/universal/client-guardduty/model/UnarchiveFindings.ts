import { UnarchiveFindingsInput } from "./UnarchiveFindingsInput";
import { UnarchiveFindingsOutput } from "./UnarchiveFindingsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
