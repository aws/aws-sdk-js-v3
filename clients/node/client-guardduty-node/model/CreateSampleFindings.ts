import { CreateSampleFindingsInput } from "./CreateSampleFindingsInput";
import { CreateSampleFindingsOutput } from "./CreateSampleFindingsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSampleFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSampleFindings",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/findings/create"
  },
  input: {
    shape: CreateSampleFindingsInput
  },
  output: {
    shape: CreateSampleFindingsOutput
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
