import { RemoveLayerVersionPermissionInput } from "../shapes/RemoveLayerVersionPermissionInput";
import { RemoveLayerVersionPermissionOutput } from "../shapes/RemoveLayerVersionPermissionOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
