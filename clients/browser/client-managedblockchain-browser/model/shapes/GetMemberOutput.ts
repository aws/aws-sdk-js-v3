import { _Member } from "./_Member";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMemberOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Member: {
      shape: _Member
    }
  }
};
