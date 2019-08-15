import { _IpPermissionsList } from "./_IpPermissionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFleetPortSettingsInput: _Structure_ = {
  type: "structure",
  required: ["FleetId"],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    InboundPermissionAuthorizations: {
      shape: _IpPermissionsList
    },
    InboundPermissionRevocations: {
      shape: _IpPermissionsList
    }
  }
};
