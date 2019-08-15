import { _StepStateList } from "./_StepStateList";
import { _XmlStringList } from "./_XmlStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStepsInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    StepStates: {
      shape: _StepStateList
    },
    StepIds: {
      shape: _XmlStringList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
