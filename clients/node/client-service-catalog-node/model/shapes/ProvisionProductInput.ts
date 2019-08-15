import { _ProvisioningParameters } from "./_ProvisioningParameters";
import { _ProvisioningPreferences } from "./_ProvisioningPreferences";
import { _Tags } from "./_Tags";
import { _NotificationArns } from "./_NotificationArns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ProvisionProductInput: _Structure_ = {
  type: "structure",
  required: [
    "ProductId",
    "ProvisioningArtifactId",
    "ProvisionedProductName",
    "ProvisionToken"
  ],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    ProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisioningArtifactId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PathId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisionedProductName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisioningParameters: {
      shape: _ProvisioningParameters
    },
    ProvisioningPreferences: {
      shape: _ProvisioningPreferences
    },
    Tags: {
      shape: _Tags
    },
    NotificationArns: {
      shape: _NotificationArns
    },
    ProvisionToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
