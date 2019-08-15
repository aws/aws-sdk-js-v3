import { _AddTags } from "./_AddTags";
import { _ProvisioningArtifactProperties } from "./_ProvisioningArtifactProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProductInput: _Structure_ = {
  type: "structure",
  required: [
    "Name",
    "Owner",
    "ProductType",
    "ProvisioningArtifactParameters",
    "IdempotencyToken"
  ],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Owner: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Distributor: {
      shape: {
        type: "string"
      }
    },
    SupportDescription: {
      shape: {
        type: "string"
      }
    },
    SupportEmail: {
      shape: {
        type: "string"
      }
    },
    SupportUrl: {
      shape: {
        type: "string"
      }
    },
    ProductType: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _AddTags
    },
    ProvisioningArtifactParameters: {
      shape: _ProvisioningArtifactProperties
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
