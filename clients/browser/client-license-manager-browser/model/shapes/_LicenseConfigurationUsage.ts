import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LicenseConfigurationUsage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    ResourceStatus: {
      shape: {
        type: "string"
      }
    },
    ResourceOwnerId: {
      shape: {
        type: "string"
      }
    },
    AssociationTime: {
      shape: {
        type: "timestamp"
      }
    },
    ConsumedLicenses: {
      shape: {
        type: "integer"
      }
    }
  }
};
