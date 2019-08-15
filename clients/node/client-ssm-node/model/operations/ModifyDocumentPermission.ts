import { ModifyDocumentPermissionInput } from "../shapes/ModifyDocumentPermissionInput";
import { ModifyDocumentPermissionOutput } from "../shapes/ModifyDocumentPermissionOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidPermissionType } from "../shapes/InvalidPermissionType";
import { DocumentPermissionLimit } from "../shapes/DocumentPermissionLimit";
import { DocumentLimitExceeded } from "../shapes/DocumentLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
