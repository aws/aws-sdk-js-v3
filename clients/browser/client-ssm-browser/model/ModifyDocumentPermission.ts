import { ModifyDocumentPermissionInput } from "./ModifyDocumentPermissionInput";
import { ModifyDocumentPermissionOutput } from "./ModifyDocumentPermissionOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidPermissionType } from "./InvalidPermissionType";
import { DocumentPermissionLimit } from "./DocumentPermissionLimit";
import { DocumentLimitExceeded } from "./DocumentLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyDocumentPermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyDocumentPermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyDocumentPermissionInput
  },
  output: {
    shape: ModifyDocumentPermissionOutput
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
    },
    {
      shape: DocumentPermissionLimit
    },
    {
      shape: DocumentLimitExceeded
    }
  ]
};
