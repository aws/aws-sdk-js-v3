import { _ResourceTypes } from "./_ResourceTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetComplianceSummaryByResourceTypeInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceTypes: {
      shape: _ResourceTypes
    }
  }
};
