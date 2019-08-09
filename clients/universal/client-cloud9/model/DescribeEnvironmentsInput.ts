import { _BoundedEnvironmentIdList } from "./_BoundedEnvironmentIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentsInput: _Structure_ = {
  type: "structure",
  required: ["environmentIds"],
  members: {
    environmentIds: {
      shape: _BoundedEnvironmentIdList
    }
  }
};
