import { GetThreatIntelSetInput } from "./GetThreatIntelSetInput";
import { GetThreatIntelSetOutput } from "./GetThreatIntelSetOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetThreatIntelSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetThreatIntelSet",
  http: {
    method: "GET",
    requestUri: "/detector/{detectorId}/threatintelset/{threatIntelSetId}"
  },
  input: {
    shape: GetThreatIntelSetInput
  },
  output: {
    shape: GetThreatIntelSetOutput
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
