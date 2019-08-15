import { DescribeDocumentPermissionInput } from "../shapes/DescribeDocumentPermissionInput";
import { DescribeDocumentPermissionOutput } from "../shapes/DescribeDocumentPermissionOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidPermissionType } from "../shapes/InvalidPermissionType";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
