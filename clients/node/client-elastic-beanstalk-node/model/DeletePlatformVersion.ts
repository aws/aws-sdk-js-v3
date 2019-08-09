import { DeletePlatformVersionInput } from "./DeletePlatformVersionInput";
import { DeletePlatformVersionOutput } from "./DeletePlatformVersionOutput";
import { OperationInProgressException } from "./OperationInProgressException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { ElasticBeanstalkServiceException } from "./ElasticBeanstalkServiceException";
import { PlatformVersionStillReferencedException } from "./PlatformVersionStillReferencedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
