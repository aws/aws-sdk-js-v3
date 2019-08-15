import { DisassociateFromMasterAccountInput } from "../shapes/DisassociateFromMasterAccountInput";
import { DisassociateFromMasterAccountOutput } from "../shapes/DisassociateFromMasterAccountOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateFromMasterAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateFromMasterAccount",
  http: {
    method: "POST",
    requestUri: "/master/disassociate"
  },
  input: {
    shape: DisassociateFromMasterAccountInput
  },
  output: {
    shape: DisassociateFromMasterAccountOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
