import { _DeployedImages } from "./_DeployedImages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProductionVariantSummary: _Structure_ = {
  type: "structure",
  required: ["VariantName"],
  members: {
    VariantName: {
      shape: {
        type: "string"
      }
    },
    DeployedImages: {
      shape: _DeployedImages
    },
    CurrentWeight: {
      shape: {
        type: "float"
      }
    },
    DesiredWeight: {
      shape: {
        type: "float"
      }
    },
    CurrentInstanceCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    DesiredInstanceCount: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
