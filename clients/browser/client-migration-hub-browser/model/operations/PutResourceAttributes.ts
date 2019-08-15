import { PutResourceAttributesInput } from "../shapes/PutResourceAttributesInput";
import { PutResourceAttributesOutput } from "../shapes/PutResourceAttributesOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { DryRunOperation } from "../shapes/DryRunOperation";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutResourceAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutResourceAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutResourceAttributesInput
  },
  output: {
    shape: PutResourceAttributesOutput
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
