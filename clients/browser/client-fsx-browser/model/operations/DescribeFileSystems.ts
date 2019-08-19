import { DescribeFileSystemsInput } from "../shapes/DescribeFileSystemsInput";
import { DescribeFileSystemsOutput } from "../shapes/DescribeFileSystemsOutput";
import { BadRequest } from "../shapes/BadRequest";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFileSystems: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFileSystems",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFileSystemsInput
  },
  output: {
    shape: DescribeFileSystemsOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: FileSystemNotFound
    },
    {
      shape: InternalServerError
    }
  ]
};
