import { DisassociateFromMasterAccountInput } from "./DisassociateFromMasterAccountInput";
import { DisassociateFromMasterAccountOutput } from "./DisassociateFromMasterAccountOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateFromMasterAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateFromMasterAccount",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/master/disassociate"
  },
  input: {
    shape: DisassociateFromMasterAccountInput
  },
  output: {
    shape: DisassociateFromMasterAccountOutput
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
