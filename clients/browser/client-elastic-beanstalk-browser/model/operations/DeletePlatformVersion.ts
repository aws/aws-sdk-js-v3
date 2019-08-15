import { DeletePlatformVersionInput } from "../shapes/DeletePlatformVersionInput";
import { DeletePlatformVersionOutput } from "../shapes/DeletePlatformVersionOutput";
import { OperationInProgressException } from "../shapes/OperationInProgressException";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { ElasticBeanstalkServiceException } from "../shapes/ElasticBeanstalkServiceException";
import { PlatformVersionStillReferencedException } from "../shapes/PlatformVersionStillReferencedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePlatformVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePlatformVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePlatformVersionInput
  },
  output: {
    shape: DeletePlatformVersionOutput,
    resultWrapper: "DeletePlatformVersionResult"
  },
  errors: [
    {
      shape: OperationInProgressException
    },
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: ElasticBeanstalkServiceException
    },
    {
      shape: PlatformVersionStillReferencedException
    }
  ]
};
