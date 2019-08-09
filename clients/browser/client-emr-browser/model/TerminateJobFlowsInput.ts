import { _XmlStringList } from "./_XmlStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateJobFlowsInput: _Structure_ = {
  type: "structure",
  required: ["JobFlowIds"],
  members: {
    JobFlowIds: {
      shape: _XmlStringList
    }
  }
};
