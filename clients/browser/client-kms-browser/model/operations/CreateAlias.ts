import { CreateAliasInput } from "../shapes/CreateAliasInput";
import { CreateAliasOutput } from "../shapes/CreateAliasOutput";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidAliasNameException } from "../shapes/InvalidAliasNameException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAliasInput
  },
  output: {
    shape: CreateAliasOutput
  },
  errors: [
    {
      shape: DependencyTimeoutException
    },
    {
      shape: AlreadyExistsException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidAliasNameException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
