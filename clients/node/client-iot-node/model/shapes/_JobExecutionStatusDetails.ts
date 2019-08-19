import { _DetailsMap } from "./_DetailsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobExecutionStatusDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    detailsMap: {
      shape: _DetailsMap
    }
  }
};
