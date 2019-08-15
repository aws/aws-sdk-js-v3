import { _ApplicationDetail } from "./_ApplicationDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApplicationOutput: _Structure_ = {
  type: "structure",
  required: ["ApplicationDetail"],
  members: {
    ApplicationDetail: {
      shape: _ApplicationDetail
    }
  }
};
