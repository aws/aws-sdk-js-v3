import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateClusterVersionInput: _Structure_ = {
  type: "structure",
  required: ["name", "version"],
  members: {
    name: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "name"
    },
    version: {
      shape: {
        type: "string"
      }
    },
    clientRequestToken: {
      shape: {
        type: "string"
      }
    }
  }
};
