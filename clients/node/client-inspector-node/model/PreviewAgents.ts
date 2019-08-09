import { PreviewAgentsInput } from "./PreviewAgentsInput";
import { PreviewAgentsOutput } from "./PreviewAgentsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidCrossAccountRoleException } from "./InvalidCrossAccountRoleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
