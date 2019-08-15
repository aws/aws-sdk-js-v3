import { CreateDomainInput } from "../shapes/CreateDomainInput";
import { CreateDomainOutput } from "../shapes/CreateDomainOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDomainInput
  },
  output: {
    shape: CreateDomainOutput,
    resultWrapper: "CreateDomainResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: LimitExceededException
    }
  ]
};
