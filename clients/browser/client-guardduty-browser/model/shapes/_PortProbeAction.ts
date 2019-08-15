import { _PortProbeDetails } from "./_PortProbeDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PortProbeAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Blocked: {
      shape: {
        type: "boolean"
      },
      locationName: "blocked"
    },
    PortProbeDetails: {
      shape: _PortProbeDetails,
      locationName: "portProbeDetails"
    }
  }
};
