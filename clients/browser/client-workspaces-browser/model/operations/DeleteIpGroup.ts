import { DeleteIpGroupInput } from "../shapes/DeleteIpGroupInput";
import { DeleteIpGroupOutput } from "../shapes/DeleteIpGroupOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAssociatedException } from "../shapes/ResourceAssociatedException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteIpGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIpGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteIpGroupInput
  },
  output: {
    shape: DeleteIpGroupOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceAssociatedException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
