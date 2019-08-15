import { DescribeFileSystemsInput } from "../shapes/DescribeFileSystemsInput";
import { DescribeFileSystemsOutput } from "../shapes/DescribeFileSystemsOutput";
import { BadRequest } from "../shapes/BadRequest";
import { InternalServerError } from "../shapes/InternalServerError";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFileSystems: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFileSystems",
  http: {
    method: "GET",
    requestUri: "/2015-02-01/file-systems"
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
      shape: InternalServerError
    },
    {
      shape: FileSystemNotFound
    }
  ]
};
