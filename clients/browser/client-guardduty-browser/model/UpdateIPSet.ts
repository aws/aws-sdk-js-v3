import { UpdateIPSetInput } from "./UpdateIPSetInput";
import { UpdateIPSetOutput } from "./UpdateIPSetOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateIPSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateIPSet",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/ipset/{ipSetId}"
  },
  input: {
    shape: UpdateIPSetInput
  },
  output: {
    shape: UpdateIPSetOutput
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
