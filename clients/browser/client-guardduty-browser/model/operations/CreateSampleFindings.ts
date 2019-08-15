import { CreateSampleFindingsInput } from "../shapes/CreateSampleFindingsInput";
import { CreateSampleFindingsOutput } from "../shapes/CreateSampleFindingsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
