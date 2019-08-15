import { _ManagedActions } from "./_ManagedActions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentManagedActionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ManagedActions: {
      shape: _ManagedActions
    }
  }
};
