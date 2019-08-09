import { CreatePlatformVersionInput } from "./CreatePlatformVersionInput";
import { CreatePlatformVersionOutput } from "./CreatePlatformVersionOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { ElasticBeanstalkServiceException } from "./ElasticBeanstalkServiceException";
import { TooManyPlatformsException } from "./TooManyPlatformsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
