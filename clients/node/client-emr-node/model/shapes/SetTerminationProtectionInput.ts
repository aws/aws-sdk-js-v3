import { _XmlStringList } from "./_XmlStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetTerminationProtectionInput: _Structure_ = {
  type: "structure",
  required: ["JobFlowIds", "TerminationProtected"],
  members: {
    JobFlowIds: {
      shape: _XmlStringList
    },
    TerminationProtected: {
      shape: {
        type: "boolean"
      }
    }
  }
};
