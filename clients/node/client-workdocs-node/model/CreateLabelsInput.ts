import { _SharedLabels } from "./_SharedLabels";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLabelsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId", "Labels"],
  members: {
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "ResourceId"
    },
    Labels: {
      shape: _SharedLabels
    },
    AuthenticationToken: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "header",
      locationName: "Authentication"
    }
  }
};
