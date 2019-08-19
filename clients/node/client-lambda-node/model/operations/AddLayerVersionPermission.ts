import { AddLayerVersionPermissionInput } from "../shapes/AddLayerVersionPermissionInput";
import { AddLayerVersionPermissionOutput } from "../shapes/AddLayerVersionPermissionOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { PolicyLengthExceededException } from "../shapes/PolicyLengthExceededException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddLayerVersionPermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddLayerVersionPermission",
  http: {
    method: "POST",
    requestUri: "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy"
  },
  input: {
    shape: AddLayerVersionPermissionInput
  },
  output: {
    shape: AddLayerVersionPermissionOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: PolicyLengthExceededException
    },
    {
      shape: PreconditionFailedException
    }
  ]
};
