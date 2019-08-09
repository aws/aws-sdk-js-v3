import { DescribeFileSystemsInput } from "./DescribeFileSystemsInput";
import { DescribeFileSystemsOutput } from "./DescribeFileSystemsOutput";
import { BadRequest } from "./BadRequest";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
