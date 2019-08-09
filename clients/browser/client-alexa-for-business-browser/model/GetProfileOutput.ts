import { _Profile } from "./_Profile";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Profile: {
      shape: _Profile
    }
  }
};
