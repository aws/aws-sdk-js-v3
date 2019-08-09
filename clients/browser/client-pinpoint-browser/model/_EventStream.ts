import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventStream: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "RoleArn", "DestinationStreamArn"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      }
    },
    DestinationStreamArn: {
      shape: {
        type: "string"
      }
    },
    ExternalId: {
      shape: {
        type: "string"
      }
    },
    LastModifiedDate: {
      shape: {
        type: "string"
      }
    },
    LastUpdatedBy: {
      shape: {
        type: "string"
      }
    },
    RoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
