import { DescribeTagsInput } from "./DescribeTagsInput";
import { DescribeTagsOutput } from "./DescribeTagsOutput";
import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTags",
  http: {
    method: "GET",
    requestUri: "/2015-02-01/tags/{FileSystemId}/"
  },
  input: {
    shape: DescribeTagsInput
  },
  output: {
    shape: DescribeTagsOutput
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
