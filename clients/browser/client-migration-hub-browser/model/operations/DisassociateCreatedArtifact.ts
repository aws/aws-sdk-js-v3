import { DisassociateCreatedArtifactInput } from "../shapes/DisassociateCreatedArtifactInput";
import { DisassociateCreatedArtifactOutput } from "../shapes/DisassociateCreatedArtifactOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { DryRunOperation } from "../shapes/DryRunOperation";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateCreatedArtifact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateCreatedArtifact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateCreatedArtifactInput
  },
  output: {
    shape: DisassociateCreatedArtifactOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: DryRunOperation
    },
    {
      shape: UnauthorizedOperation
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
