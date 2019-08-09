import { ArchiveFindingsInput } from "./ArchiveFindingsInput";
import { ArchiveFindingsOutput } from "./ArchiveFindingsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ArchiveFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ArchiveFindings",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/findings/archive"
  },
  input: {
    shape: ArchiveFindingsInput
  },
  output: {
    shape: ArchiveFindingsOutput
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
