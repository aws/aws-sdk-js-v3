import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteStreamInput: _Structure_ = {
  type: "structure",
  required: ["streamId"],
  members: {
    streamId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "streamId"
    }
  }
};
