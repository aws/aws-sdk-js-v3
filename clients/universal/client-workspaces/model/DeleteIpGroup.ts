import { DeleteIpGroupInput } from "./DeleteIpGroupInput";
import { DeleteIpGroupOutput } from "./DeleteIpGroupOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAssociatedException } from "./ResourceAssociatedException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
