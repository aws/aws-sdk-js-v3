import { Structure as _Structure_ } from "@aws-sdk/types";

export const ApplyEnvironmentManagedActionInput: _Structure_ = {
  type: "structure",
  required: ["ActionId"],
  members: {
    EnvironmentName: {
      shape: {
        type: "string"
      }
    },
    EnvironmentId: {
      shape: {
        type: "string"
      }
    },
    ActionId: {
      shape: {
        type: "string"
      }
    }
  }
};
