import { _Targets } from "./_Targets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateMaintenanceWindowTargetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    WindowTargetId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    Targets: {
      shape: _Targets
    },
    OwnerInformation: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 3
      }
    },
    Description: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
