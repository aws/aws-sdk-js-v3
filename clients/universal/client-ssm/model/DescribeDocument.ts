import { DescribeDocumentInput } from "./DescribeDocumentInput";
import { DescribeDocumentOutput } from "./DescribeDocumentOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
