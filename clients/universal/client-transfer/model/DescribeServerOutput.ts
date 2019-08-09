import { _DescribedServer } from "./_DescribedServer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServerOutput: _Structure_ = {
  type: "structure",
  required: ["Server"],
  members: {
    Server: {
      shape: _DescribedServer
    }
  }
};
