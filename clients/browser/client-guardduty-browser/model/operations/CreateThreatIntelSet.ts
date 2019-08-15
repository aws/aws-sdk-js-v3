import { CreateThreatIntelSetInput } from "../shapes/CreateThreatIntelSetInput";
import { CreateThreatIntelSetOutput } from "../shapes/CreateThreatIntelSetOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateThreatIntelSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateThreatIntelSet",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/threatintelset"
  },
  input: {
    shape: CreateThreatIntelSetInput
  },
  output: {
    shape: CreateThreatIntelSetOutput
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
