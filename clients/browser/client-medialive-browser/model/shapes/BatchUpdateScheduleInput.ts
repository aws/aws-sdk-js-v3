import { _BatchScheduleActionCreateRequest } from "./_BatchScheduleActionCreateRequest";
import { _BatchScheduleActionDeleteRequest } from "./_BatchScheduleActionDeleteRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchUpdateScheduleInput: _Structure_ = {
  type: "structure",
  required: ["ChannelId"],
  members: {
    ChannelId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "channelId"
    },
    Creates: {
      shape: _BatchScheduleActionCreateRequest,
      locationName: "creates"
    },
    Deletes: {
      shape: _BatchScheduleActionDeleteRequest,
      locationName: "deletes"
    }
  }
};
