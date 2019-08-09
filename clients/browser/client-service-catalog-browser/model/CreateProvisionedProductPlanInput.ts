import { _NotificationArns } from "./_NotificationArns";
import { _UpdateProvisioningParameters } from "./_UpdateProvisioningParameters";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProvisionedProductPlanInput: _Structure_ = {
  type: "structure",
  required: [
    "PlanName",
    "PlanType",
    "ProductId",
    "ProvisionedProductName",
    "ProvisioningArtifactId",
    "IdempotencyToken"
  ],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    PlanName: {
      shape: {
        type: "string"
      }
    },
    PlanType: {
      shape: {
        type: "string"
      }
    },
    NotificationArns: {
      shape: _NotificationArns
    },
    PathId: {
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
    ProvisionedProductName: {
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
    ProvisioningParameters: {
      shape: _UpdateProvisioningParameters
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
