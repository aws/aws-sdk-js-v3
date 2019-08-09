import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateChannelInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    }
  }
};
