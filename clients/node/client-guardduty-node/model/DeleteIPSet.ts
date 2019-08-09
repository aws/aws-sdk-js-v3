import { DeleteIPSetInput } from "./DeleteIPSetInput";
import { DeleteIPSetOutput } from "./DeleteIPSetOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
