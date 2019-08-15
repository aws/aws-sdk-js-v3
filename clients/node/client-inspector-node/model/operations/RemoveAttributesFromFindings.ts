import { RemoveAttributesFromFindingsInput } from "../shapes/RemoveAttributesFromFindingsInput";
import { RemoveAttributesFromFindingsOutput } from "../shapes/RemoveAttributesFromFindingsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveAttributesFromFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveAttributesFromFindings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveAttributesFromFindingsInput
  },
  output: {
    shape: RemoveAttributesFromFindingsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceTemporarilyUnavailableException
    }
  ]
};
