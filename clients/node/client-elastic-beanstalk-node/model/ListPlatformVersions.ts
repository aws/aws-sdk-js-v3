import { ListPlatformVersionsInput } from "./ListPlatformVersionsInput";
import { ListPlatformVersionsOutput } from "./ListPlatformVersionsOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { ElasticBeanstalkServiceException } from "./ElasticBeanstalkServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPlatformVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPlatformVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPlatformVersionsInput
  },
  output: {
    shape: ListPlatformVersionsOutput,
    resultWrapper: "ListPlatformVersionsResult"
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: ElasticBeanstalkServiceException
    }
  ]
};
