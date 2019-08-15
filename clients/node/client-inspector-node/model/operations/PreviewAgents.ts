import { PreviewAgentsInput } from "../shapes/PreviewAgentsInput";
import { PreviewAgentsOutput } from "../shapes/PreviewAgentsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidCrossAccountRoleException } from "../shapes/InvalidCrossAccountRoleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PreviewAgents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PreviewAgents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PreviewAgentsInput
  },
  output: {
    shape: PreviewAgentsOutput
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
      shape: InvalidCrossAccountRoleException
    }
  ]
};
