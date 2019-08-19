import { CreateIpGroupInput } from "../shapes/CreateIpGroupInput";
import { CreateIpGroupOutput } from "../shapes/CreateIpGroupOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceCreationFailedException } from "../shapes/ResourceCreationFailedException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
