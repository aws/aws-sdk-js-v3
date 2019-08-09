import { _Targets } from "./_Targets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterTargetWithMaintenanceWindowInput: _Structure_ = {
  type: "structure",
  required: ["WindowId", "ResourceType", "Targets"],
  members: {
    WindowId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ResourceType: {
      shape: {
        type: "string"
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
    },
    ClientToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
