import { ___listOfPipelinePauseStateSettings } from "./___listOfPipelinePauseStateSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PauseStateScheduleActionSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Pipelines: {
      shape: ___listOfPipelinePauseStateSettings,
      locationName: "pipelines"
    }
  }
};
