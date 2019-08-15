import { _ThirdPartyJobDetails } from "./_ThirdPartyJobDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetThirdPartyJobDetailsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobDetails: {
      shape: _ThirdPartyJobDetails
    }
  }
};
