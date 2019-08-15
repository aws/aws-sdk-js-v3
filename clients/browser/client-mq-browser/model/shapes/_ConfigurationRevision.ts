import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigurationRevision: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Created: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "created"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Revision: {
      shape: {
        type: "integer"
      },
      locationName: "revision"
    }
  }
};
