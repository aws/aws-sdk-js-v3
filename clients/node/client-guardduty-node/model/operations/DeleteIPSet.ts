import { DeleteIPSetInput } from "../shapes/DeleteIPSetInput";
import { DeleteIPSetOutput } from "../shapes/DeleteIPSetOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteIPSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIPSet",
  http: {
    method: "DELETE",
    requestUri: "/detector/{detectorId}/ipset/{ipSetId}"
  },
  input: {
    shape: DeleteIPSetInput
  },
  output: {
    shape: DeleteIPSetOutput
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
