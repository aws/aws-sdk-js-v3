import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProductionVariant: _Structure_ = {
  type: "structure",
  required: [
    "VariantName",
    "ModelName",
    "InitialInstanceCount",
    "InstanceType"
  ],
  members: {
    VariantName: {
      shape: {
        type: "string"
      }
    },
    ModelName: {
      shape: {
        type: "string"
      }
    },
    InitialInstanceCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    InitialVariantWeight: {
      shape: {
        type: "float"
      }
    },
    AcceleratorType: {
      shape: {
        type: "string"
      }
    }
  }
};
