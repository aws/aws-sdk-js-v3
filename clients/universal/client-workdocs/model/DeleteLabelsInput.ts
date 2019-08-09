import { _SharedLabels } from "./_SharedLabels";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLabelsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId"],
  members: {
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "ResourceId"
    },
    AuthenticationToken: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "header",
      locationName: "Authentication"
    },
    Labels: {
      shape: _SharedLabels,
      location: "querystring",
      locationName: "labels"
    },
    DeleteAll: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "deleteAll"
    }
  }
};
