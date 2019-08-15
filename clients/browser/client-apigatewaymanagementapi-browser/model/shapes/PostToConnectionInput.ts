import { Structure as _Structure_ } from "@aws-sdk/types";

export const PostToConnectionInput: _Structure_ = {
  type: "structure",
  required: ["ConnectionId", "Data"],
  members: {
    Data: {
      shape: {
        type: "blob"
      }
    },
    ConnectionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "connectionId"
    }
  },
  payload: "Data"
};
