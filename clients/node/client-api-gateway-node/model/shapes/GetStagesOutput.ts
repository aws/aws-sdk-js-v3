import { _ListOfStage } from "./_ListOfStage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetStagesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    item: {
      shape: _ListOfStage
    }
  }
};
