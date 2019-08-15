import { ListPlatformVersionsInput } from "../shapes/ListPlatformVersionsInput";
import { ListPlatformVersionsOutput } from "../shapes/ListPlatformVersionsOutput";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { ElasticBeanstalkServiceException } from "../shapes/ElasticBeanstalkServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
