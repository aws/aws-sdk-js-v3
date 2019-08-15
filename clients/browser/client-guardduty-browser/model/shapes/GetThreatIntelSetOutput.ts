import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetThreatIntelSetOutput: _Structure_ = {
  type: "structure",
  required: ["Name", "Format", "Location", "Status"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "name"
    },
    Format: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "format"
    },
    Location: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "location"
    },
    Status: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "status"
    },
    Tags: {
      shape: _TagMap,
      locationName: "tags"
    }
  }
};
