import { GetMasterAccountInput } from "../shapes/GetMasterAccountInput";
import { GetMasterAccountOutput } from "../shapes/GetMasterAccountOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetMasterAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMasterAccount",
  http: {
    method: "GET",
    requestUri: "/master"
  },
  input: {
    shape: GetMasterAccountInput
  },
  output: {
    shape: GetMasterAccountOutput
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
