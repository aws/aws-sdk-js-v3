import { DescribeAttachmentInput } from "../shapes/DescribeAttachmentInput";
import { DescribeAttachmentOutput } from "../shapes/DescribeAttachmentOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { DescribeAttachmentLimitExceeded } from "../shapes/DescribeAttachmentLimitExceeded";
import { AttachmentIdNotFound } from "../shapes/AttachmentIdNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
