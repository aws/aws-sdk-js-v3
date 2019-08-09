import { _ThirdPartyJobList } from "./_ThirdPartyJobList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PollForThirdPartyJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobs: {
      shape: _ThirdPartyJobList
    }
  }
};
