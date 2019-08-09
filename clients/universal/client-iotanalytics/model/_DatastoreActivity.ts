import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatastoreActivity: _Structure_ = {
  type: "structure",
  required: ["name", "datastoreName"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    datastoreName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
