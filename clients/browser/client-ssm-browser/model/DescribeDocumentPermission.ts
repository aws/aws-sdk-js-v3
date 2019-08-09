import { DescribeDocumentPermissionInput } from "./DescribeDocumentPermissionInput";
import { DescribeDocumentPermissionOutput } from "./DescribeDocumentPermissionOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidPermissionType } from "./InvalidPermissionType";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDocumentPermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDocumentPermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDocumentPermissionInput
  },
  output: {
    shape: DescribeDocumentPermissionOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidDocument
    },
    {
      shape: InvalidPermissionType
    }
  ]
};
