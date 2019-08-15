import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEnvironmentEC2Input: _Structure_ = {
  type: "structure",
  required: ["name", "instanceType"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    clientRequestToken: {
      shape: {
        type: "string"
      }
    },
    instanceType: {
      shape: {
        type: "string",
        min: 5
      }
    },
    subnetId: {
      shape: {
        type: "string",
        min: 5
      }
    },
    automaticStopTimeMinutes: {
      shape: {
        type: "integer"
      }
    },
    ownerArn: {
      shape: {
        type: "string"
      }
    }
  }
};
