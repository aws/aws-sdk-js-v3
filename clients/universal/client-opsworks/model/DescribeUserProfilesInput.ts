import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserProfilesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IamUserArns: {
      shape: _Strings
    }
  }
};
