import { CreateIPSetInput } from "./CreateIPSetInput";
import { CreateIPSetOutput } from "./CreateIPSetOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
