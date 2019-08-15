import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateThreatIntelSetInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "Name", "Format", "Location", "Activate"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
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
    Activate: {
      shape: {
        type: "boolean"
      },
      locationName: "activate"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    Tags: {
      shape: _TagMap,
      locationName: "tags"
    }
  }
};
