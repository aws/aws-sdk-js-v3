import { _WorkspaceProperties } from "./_WorkspaceProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyWorkspacePropertiesInput: _Structure_ = {
  type: "structure",
  required: ["WorkspaceId", "WorkspaceProperties"],
  members: {
    WorkspaceId: {
      shape: {
        type: "string"
      }
    },
    WorkspaceProperties: {
      shape: _WorkspaceProperties
    }
  }
};
