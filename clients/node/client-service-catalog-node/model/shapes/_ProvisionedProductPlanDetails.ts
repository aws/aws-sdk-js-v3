import { _NotificationArns } from "./_NotificationArns";
import { _UpdateProvisioningParameters } from "./_UpdateProvisioningParameters";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisionedProductPlanDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
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
    PlanName: {
      shape: {
        type: "string"
      }
    },
    PlanId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisionProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisionProductName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PlanType: {
      shape: {
        type: "string"
      }
    },
    ProvisioningArtifactId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    UpdatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    NotificationArns: {
      shape: _NotificationArns
    },
    ProvisioningParameters: {
      shape: _UpdateProvisioningParameters
    },
    Tags: {
      shape: _Tags
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
