import { DeleteThreatIntelSetInput } from "./DeleteThreatIntelSetInput";
import { DeleteThreatIntelSetOutput } from "./DeleteThreatIntelSetOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteThreatIntelSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteThreatIntelSet",
  http: {
    method: "DELETE",
    requestUri: "/detector/{detectorId}/threatintelset/{threatIntelSetId}"
  },
  input: {
    shape: DeleteThreatIntelSetInput
  },
  output: {
    shape: DeleteThreatIntelSetOutput
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
