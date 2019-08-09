import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RDSInstanceDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Family: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    DatabaseEngine: {
      shape: {
        type: "string"
      }
    },
    DatabaseEdition: {
      shape: {
        type: "string"
      }
    },
    DeploymentOption: {
      shape: {
        type: "string"
      }
    },
    LicenseModel: {
      shape: {
        type: "string"
      }
    },
    CurrentGeneration: {
      shape: {
        type: "boolean"
      }
    },
    SizeFlexEligible: {
      shape: {
        type: "boolean"
      }
    }
  }
};
