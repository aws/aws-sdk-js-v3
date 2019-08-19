import { DescribeLifecycleConfigurationInput } from "../shapes/DescribeLifecycleConfigurationInput";
import { DescribeLifecycleConfigurationOutput } from "../shapes/DescribeLifecycleConfigurationOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { BadRequest } from "../shapes/BadRequest";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLifecycleConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLifecycleConfiguration",
  http: {
    method: "GET",
    requestUri:
      "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration"
  },
  input: {
    shape: DescribeLifecycleConfigurationInput
  },
  output: {
    shape: DescribeLifecycleConfigurationOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: BadRequest
    },
    {
      shape: FileSystemNotFound
    }
  ]
};
