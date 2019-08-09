import { DisassociateCreatedArtifactInput } from "./DisassociateCreatedArtifactInput";
import { DisassociateCreatedArtifactOutput } from "./DisassociateCreatedArtifactOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DryRunOperation } from "./DryRunOperation";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
