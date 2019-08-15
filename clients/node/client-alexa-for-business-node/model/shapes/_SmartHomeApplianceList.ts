import { List as _List_ } from "@aws-sdk/types";
import { _SmartHomeAppliance } from "./_SmartHomeAppliance";

export const _SmartHomeApplianceList: _List_ = {
  type: "list",
  member: {
    shape: _SmartHomeAppliance
  }
};
