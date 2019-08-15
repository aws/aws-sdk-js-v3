import { ImportKeyMaterialInput } from "../shapes/ImportKeyMaterialInput";
import { ImportKeyMaterialOutput } from "../shapes/ImportKeyMaterialOutput";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { NotFoundException } from "../shapes/NotFoundException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { InvalidCiphertextException } from "../shapes/InvalidCiphertextException";
import { IncorrectKeyMaterialException } from "../shapes/IncorrectKeyMaterialException";
import { ExpiredImportTokenException } from "../shapes/ExpiredImportTokenException";
import { InvalidImportTokenException } from "../shapes/InvalidImportTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ImportKeyMaterial: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportKeyMaterial",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportKeyMaterialInput
  },
  output: {
    shape: ImportKeyMaterialOutput
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
    },
    {
      shape: InvalidCiphertextException
    },
    {
      shape: IncorrectKeyMaterialException
    },
    {
      shape: ExpiredImportTokenException
    },
    {
      shape: InvalidImportTokenException
    }
  ]
};
