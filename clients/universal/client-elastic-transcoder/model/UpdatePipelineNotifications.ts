import { UpdatePipelineNotificationsInput } from "./UpdatePipelineNotificationsInput";
import { UpdatePipelineNotificationsOutput } from "./UpdatePipelineNotificationsOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdatePipelineNotifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePipelineNotifications",
  http: {
    method: "POST",
    requestUri: "/2012-09-25/pipelines/{Id}/notifications"
  },
  input: {
    shape: UpdatePipelineNotificationsInput
  },
  output: {
    shape: UpdatePipelineNotificationsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: IncompatibleVersionException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServiceException
    }
  ]
};
