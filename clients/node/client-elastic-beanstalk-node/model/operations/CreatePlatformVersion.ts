import { CreatePlatformVersionInput } from "../shapes/CreatePlatformVersionInput";
import { CreatePlatformVersionOutput } from "../shapes/CreatePlatformVersionOutput";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { ElasticBeanstalkServiceException } from "../shapes/ElasticBeanstalkServiceException";
import { TooManyPlatformsException } from "../shapes/TooManyPlatformsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePlatformVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePlatformVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePlatformVersionInput
  },
  output: {
    shape: CreatePlatformVersionOutput,
    resultWrapper: "CreatePlatformVersionResult"
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: ElasticBeanstalkServiceException
    },
    {
      shape: TooManyPlatformsException
    }
  ]
};
