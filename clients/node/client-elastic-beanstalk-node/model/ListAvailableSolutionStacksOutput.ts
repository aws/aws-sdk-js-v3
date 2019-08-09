import { _AvailableSolutionStackNamesList } from "./_AvailableSolutionStackNamesList";
import { _AvailableSolutionStackDetailsList } from "./_AvailableSolutionStackDetailsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAvailableSolutionStacksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SolutionStacks: {
      shape: _AvailableSolutionStackNamesList
    },
    SolutionStackDetails: {
      shape: _AvailableSolutionStackDetailsList
    }
  }
};
