import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFlowLogsInput: _Structure_ = {
  type: "structure",
  required: ["FlowLogIds"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    FlowLogIds: {
      shape: _ValueStringList,
      locationName: "FlowLogId"
    }
  }
};
