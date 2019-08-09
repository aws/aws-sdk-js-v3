import { _ClientVpnRouteStatus } from "./_ClientVpnRouteStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClientVpnRouteOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: _ClientVpnRouteStatus,
      locationName: "status"
    }
  }
};
