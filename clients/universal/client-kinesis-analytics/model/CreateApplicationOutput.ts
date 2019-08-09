import { _ApplicationSummary } from "./_ApplicationSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApplicationOutput: _Structure_ = {
  type: "structure",
  required: ["ApplicationSummary"],
  members: {
    ApplicationSummary: {
      shape: _ApplicationSummary
    }
  }
};
