import { _Room } from "./_Room";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRoomOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Room: {
      shape: _Room
    }
  }
};
