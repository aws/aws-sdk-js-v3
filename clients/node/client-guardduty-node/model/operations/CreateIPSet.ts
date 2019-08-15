import { CreateIPSetInput } from "../shapes/CreateIPSetInput";
import { CreateIPSetOutput } from "../shapes/CreateIPSetOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateIPSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateIPSet",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/ipset"
  },
  input: {
    shape: CreateIPSetInput
  },
  output: {
    shape: CreateIPSetOutput
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
