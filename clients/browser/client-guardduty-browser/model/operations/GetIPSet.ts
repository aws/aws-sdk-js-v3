import { GetIPSetInput } from "../shapes/GetIPSetInput";
import { GetIPSetOutput } from "../shapes/GetIPSetOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetIPSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIPSet",
  http: {
    method: "GET",
    requestUri: "/detector/{detectorId}/ipset/{ipSetId}"
  },
  input: {
    shape: GetIPSetInput
  },
  output: {
    shape: GetIPSetOutput
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
