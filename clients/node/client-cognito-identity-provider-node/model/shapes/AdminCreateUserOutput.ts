import { _UserType } from "./_UserType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminCreateUserOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    User: {
      shape: _UserType
    }
  }
};
