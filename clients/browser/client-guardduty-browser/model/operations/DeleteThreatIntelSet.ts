import { DeleteThreatIntelSetInput } from "../shapes/DeleteThreatIntelSetInput";
import { DeleteThreatIntelSetOutput } from "../shapes/DeleteThreatIntelSetOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
