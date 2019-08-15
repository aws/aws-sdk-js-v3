import { DeleteWorkspaceImageInput } from "../shapes/DeleteWorkspaceImageInput";
import { DeleteWorkspaceImageOutput } from "../shapes/DeleteWorkspaceImageOutput";
import { ResourceAssociatedException } from "../shapes/ResourceAssociatedException";
import { InvalidResourceStateException } from "../shapes/InvalidResourceStateException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
