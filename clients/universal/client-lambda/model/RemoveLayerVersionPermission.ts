import { RemoveLayerVersionPermissionInput } from "./RemoveLayerVersionPermissionInput";
import { RemoveLayerVersionPermissionOutput } from "./RemoveLayerVersionPermissionOutput";
import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveLayerVersionPermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveLayerVersionPermission",
  http: {
    method: "DELETE",
    requestUri:
      "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}"
  },
  input: {
    shape: RemoveLayerVersionPermissionInput
  },
  output: {
    shape: RemoveLayerVersionPermissionOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: PreconditionFailedException
    }
  ]
};
