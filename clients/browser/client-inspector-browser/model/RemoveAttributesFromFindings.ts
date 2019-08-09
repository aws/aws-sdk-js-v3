import { RemoveAttributesFromFindingsInput } from "./RemoveAttributesFromFindingsInput";
import { RemoveAttributesFromFindingsOutput } from "./RemoveAttributesFromFindingsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
