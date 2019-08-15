import { DescribeDocumentInput } from "../shapes/DescribeDocumentInput";
import { DescribeDocumentOutput } from "../shapes/DescribeDocumentOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidDocumentVersion } from "../shapes/InvalidDocumentVersion";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDocument: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDocument",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDocumentInput
  },
  output: {
    shape: DescribeDocumentOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidDocument
    },
    {
      shape: InvalidDocumentVersion
    }
  ]
};
