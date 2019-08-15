import { CreateDomainAssociationInput } from "../shapes/CreateDomainAssociationInput";
import { CreateDomainAssociationOutput } from "../shapes/CreateDomainAssociationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DependentServiceFailureException } from "../shapes/DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDomainAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDomainAssociation",
  http: {
    method: "POST",
    requestUri: "/apps/{appId}/domains"
  },
  input: {
    shape: CreateDomainAssociationInput
  },
  output: {
    shape: CreateDomainAssociationOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: DependentServiceFailureException
    }
  ]
};
