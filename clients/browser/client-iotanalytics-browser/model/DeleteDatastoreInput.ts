import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDatastoreInput: _Structure_ = {
  type: "structure",
  required: ["datastoreName"],
  members: {
    datastoreName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "datastoreName"
    }
  }
};
