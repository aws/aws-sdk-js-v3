import { CreateDomainInput } from "./CreateDomainInput";
import { CreateDomainOutput } from "./CreateDomainOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
