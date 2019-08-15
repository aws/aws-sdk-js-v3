import { _OperatingSystems } from "./_OperatingSystems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOperatingSystemsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OperatingSystems: {
      shape: _OperatingSystems
    }
  }
};
