import { AssociateDiscoveredResourceInput } from "../shapes/AssociateDiscoveredResourceInput";
import { AssociateDiscoveredResourceOutput } from "../shapes/AssociateDiscoveredResourceOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { DryRunOperation } from "../shapes/DryRunOperation";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyErrorException } from "../shapes/PolicyErrorException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
