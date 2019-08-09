import { _ClientVpnRouteStatus } from "./_ClientVpnRouteStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClientVpnRouteOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: _ClientVpnRouteStatus,
      locationName: "status"
    }
  }
};
