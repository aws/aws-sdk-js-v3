import { _SmartHomeApplianceList } from "./_SmartHomeApplianceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSmartHomeAppliancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SmartHomeAppliances: {
      shape: _SmartHomeApplianceList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
