import { _StaticKeyProvider } from "./_StaticKeyProvider";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CmafEncryptionSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConstantInitializationVector: {
      shape: {
        type: "string",
        min: 32
      },
      locationName: "constantInitializationVector"
    },
    EncryptionMethod: {
      shape: {
        type: "string"
      },
      locationName: "encryptionMethod"
    },
    InitializationVectorInManifest: {
      shape: {
        type: "string"
      },
      locationName: "initializationVectorInManifest"
    },
    StaticKeyProvider: {
      shape: _StaticKeyProvider,
      locationName: "staticKeyProvider"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    }
  }
};
