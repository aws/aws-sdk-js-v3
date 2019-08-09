import { _WorkflowTypeInfoList } from "./_WorkflowTypeInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWorkflowTypesOutput: _Structure_ = {
  type: "structure",
  required: ["typeInfos"],
  members: {
    typeInfos: {
      shape: _WorkflowTypeInfoList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
