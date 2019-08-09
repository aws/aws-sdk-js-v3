import { CreateIpGroupInput } from "./CreateIpGroupInput";
import { CreateIpGroupOutput } from "./CreateIpGroupOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceCreationFailedException } from "./ResourceCreationFailedException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateIpGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateIpGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateIpGroupInput
  },
  output: {
    shape: CreateIpGroupOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceCreationFailedException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
