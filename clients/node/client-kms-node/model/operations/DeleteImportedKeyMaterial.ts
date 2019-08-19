import { DeleteImportedKeyMaterialInput } from "../shapes/DeleteImportedKeyMaterialInput";
import { DeleteImportedKeyMaterialOutput } from "../shapes/DeleteImportedKeyMaterialOutput";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { NotFoundException } from "../shapes/NotFoundException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteImportedKeyMaterial: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteImportedKeyMaterial",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteImportedKeyMaterialInput
  },
  output: {
    shape: DeleteImportedKeyMaterialOutput
  },
  errors: [
    {
      shape: InvalidArnException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: NotFoundException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
