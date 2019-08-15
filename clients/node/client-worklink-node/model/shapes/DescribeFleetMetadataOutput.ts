import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetMetadataOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    FleetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string"
      }
    },
    OptimizeForEndUserLocation: {
      shape: {
        type: "boolean"
      }
    },
    CompanyCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FleetStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
