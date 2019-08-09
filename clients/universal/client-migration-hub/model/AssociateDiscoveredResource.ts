import { AssociateDiscoveredResourceInput } from "./AssociateDiscoveredResourceInput";
import { AssociateDiscoveredResourceOutput } from "./AssociateDiscoveredResourceOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DryRunOperation } from "./DryRunOperation";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyErrorException } from "./PolicyErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateDiscoveredResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateDiscoveredResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateDiscoveredResourceInput
  },
  output: {
    shape: AssociateDiscoveredResourceOutput
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
      shape: PolicyErrorException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
