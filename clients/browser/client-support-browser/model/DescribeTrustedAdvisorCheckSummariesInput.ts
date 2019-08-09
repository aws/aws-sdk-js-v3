import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrustedAdvisorCheckSummariesInput: _Structure_ = {
  type: "structure",
  required: ["checkIds"],
  members: {
    checkIds: {
      shape: _StringList
    }
  }
};
