import { _Datapoints } from "./_Datapoints";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetScalingPlanResourceForecastDataOutput: _Structure_ = {
  type: "structure",
  required: ["Datapoints"],
  members: {
    Datapoints: {
      shape: _Datapoints
    }
  }
};
