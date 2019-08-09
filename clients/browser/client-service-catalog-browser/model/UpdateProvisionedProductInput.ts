import { _UpdateProvisioningParameters } from "./_UpdateProvisioningParameters";
import { _UpdateProvisioningPreferences } from "./_UpdateProvisioningPreferences";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateProvisionedProductInput: _Structure_ = {
  type: "structure",
  required: ["UpdateToken"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    ProvisionedProductName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisionedProductId: {
      shape: {
        type: "string",
        min: 1
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
    ProvisioningParameters: {
      shape: _UpdateProvisioningParameters
    },
    ProvisioningPreferences: {
      shape: _UpdateProvisioningPreferences
    },
    Tags: {
      shape: _Tags
    },
    UpdateToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
