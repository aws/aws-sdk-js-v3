import { _ChapCredentials } from "./_ChapCredentials";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeChapCredentialsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChapCredentials: {
      shape: _ChapCredentials
    }
  }
};
