import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FleetSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
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
