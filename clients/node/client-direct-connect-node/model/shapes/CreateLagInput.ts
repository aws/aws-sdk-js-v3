import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLagInput: _Structure_ = {
  type: "structure",
  required: [
    "numberOfConnections",
    "location",
    "connectionsBandwidth",
    "lagName"
  ],
  members: {
    numberOfConnections: {
      shape: {
        type: "integer"
      }
    },
    location: {
      shape: {
        type: "string"
      }
    },
    connectionsBandwidth: {
      shape: {
        type: "string"
      }
    },
    lagName: {
      shape: {
        type: "string"
      }
    },
    connectionId: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    },
    childConnectionTags: {
      shape: _TagList
    }
  }
};
