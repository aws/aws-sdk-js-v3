import { DisassociateFromMasterAccountInput } from "./DisassociateFromMasterAccountInput";
import { DisassociateFromMasterAccountOutput } from "./DisassociateFromMasterAccountOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
