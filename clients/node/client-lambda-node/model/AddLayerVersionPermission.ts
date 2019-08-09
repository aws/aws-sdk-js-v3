import { AddLayerVersionPermissionInput } from "./AddLayerVersionPermissionInput";
import { AddLayerVersionPermissionOutput } from "./AddLayerVersionPermissionOutput";
import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceConflictException } from "./ResourceConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { PolicyLengthExceededException } from "./PolicyLengthExceededException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
