import { CreateDomainAssociationInput } from "./CreateDomainAssociationInput";
import { CreateDomainAssociationOutput } from "./CreateDomainAssociationOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
