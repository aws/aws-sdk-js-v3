import { _IpPermissionsList } from "./_IpPermissionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetPortSettingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InboundPermissions: {
      shape: _IpPermissionsList
    }
  }
};
