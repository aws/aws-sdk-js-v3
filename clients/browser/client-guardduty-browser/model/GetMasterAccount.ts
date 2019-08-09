import { GetMasterAccountInput } from "./GetMasterAccountInput";
import { GetMasterAccountOutput } from "./GetMasterAccountOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMasterAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMasterAccount",
  http: {
    method: "GET",
    requestUri: "/detector/{detectorId}/master"
  },
  input: {
    shape: GetMasterAccountInput
  },
  output: {
    shape: GetMasterAccountOutput
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
