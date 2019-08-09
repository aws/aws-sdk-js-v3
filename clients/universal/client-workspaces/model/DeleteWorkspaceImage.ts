import { DeleteWorkspaceImageInput } from "./DeleteWorkspaceImageInput";
import { DeleteWorkspaceImageOutput } from "./DeleteWorkspaceImageOutput";
import { ResourceAssociatedException } from "./ResourceAssociatedException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteWorkspaceImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteWorkspaceImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteWorkspaceImageInput
  },
  output: {
    shape: DeleteWorkspaceImageOutput
  },
  errors: [
    {
      shape: ResourceAssociatedException
    },
    {
      shape: InvalidResourceStateException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
