import { GetMasterAccountInput } from "./GetMasterAccountInput";
import { GetMasterAccountOutput } from "./GetMasterAccountOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
