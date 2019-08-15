import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseEventsInput: _Structure_ = {
  type: "structure",
  required: ["relationalDatabaseName"],
  members: {
    relationalDatabaseName: {
      shape: {
        type: "string"
      }
    },
    durationInMinutes: {
      shape: {
        type: "integer"
      }
    },
    pageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
