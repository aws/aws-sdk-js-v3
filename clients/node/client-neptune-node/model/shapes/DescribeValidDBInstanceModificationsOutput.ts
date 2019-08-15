import { _ValidDBInstanceModificationsMessage } from "./_ValidDBInstanceModificationsMessage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeValidDBInstanceModificationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ValidDBInstanceModificationsMessage: {
      shape: _ValidDBInstanceModificationsMessage
    }
  }
};
