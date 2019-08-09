import { UpdateThreatIntelSetInput } from "./UpdateThreatIntelSetInput";
import { UpdateThreatIntelSetOutput } from "./UpdateThreatIntelSetOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateThreatIntelSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateThreatIntelSet",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/threatintelset/{threatIntelSetId}"
  },
  input: {
    shape: UpdateThreatIntelSetInput
  },
  output: {
    shape: UpdateThreatIntelSetOutput
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
