import { _XmlStringList } from "./_XmlStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetVisibleToAllUsersInput: _Structure_ = {
  type: "structure",
  required: ["JobFlowIds", "VisibleToAllUsers"],
  members: {
    JobFlowIds: {
      shape: _XmlStringList
    },
    VisibleToAllUsers: {
      shape: {
        type: "boolean"
      }
    }
  }
};
