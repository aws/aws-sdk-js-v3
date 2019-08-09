import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStreamingURLInput: _Structure_ = {
  type: "structure",
  required: ["StackName", "FleetName", "UserId"],
  members: {
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FleetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserId: {
      shape: {
        type: "string",
        min: 2
      }
    },
    ApplicationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Validity: {
      shape: {
        type: "integer"
      }
    },
    SessionContext: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
