import { DescribeAttachmentInput } from "./DescribeAttachmentInput";
import { DescribeAttachmentOutput } from "./DescribeAttachmentOutput";
import { InternalServerError } from "./InternalServerError";
import { DescribeAttachmentLimitExceeded } from "./DescribeAttachmentLimitExceeded";
import { AttachmentIdNotFound } from "./AttachmentIdNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeAttachment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAttachment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAttachmentInput
  },
  output: {
    shape: DescribeAttachmentOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: DescribeAttachmentLimitExceeded
    },
    {
      shape: AttachmentIdNotFound
    }
  ]
};
