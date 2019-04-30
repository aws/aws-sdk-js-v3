import { _WriteEventStream } from "./_WriteEventStream";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEventStreamInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "WriteEventStream"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    WriteEventStream: {
      shape: _WriteEventStream
    }
  },
  payload: "WriteEventStream"
};
