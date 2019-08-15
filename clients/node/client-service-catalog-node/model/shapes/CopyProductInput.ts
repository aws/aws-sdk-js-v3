import { _SourceProvisioningArtifactProperties } from "./_SourceProvisioningArtifactProperties";
import { _CopyOptions } from "./_CopyOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyProductInput: _Structure_ = {
  type: "structure",
  required: ["SourceProductArn", "IdempotencyToken"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    SourceProductArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetProductName: {
      shape: {
        type: "string"
      }
    },
    SourceProvisioningArtifactIdentifiers: {
      shape: _SourceProvisioningArtifactProperties
    },
    CopyOptions: {
      shape: _CopyOptions
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
