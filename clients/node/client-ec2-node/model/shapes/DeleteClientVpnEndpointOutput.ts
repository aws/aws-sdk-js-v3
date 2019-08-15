import { _ClientVpnEndpointStatus } from "./_ClientVpnEndpointStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClientVpnEndpointOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: _ClientVpnEndpointStatus,
      locationName: "status"
    }
  }
};
