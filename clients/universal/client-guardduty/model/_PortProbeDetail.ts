import { _LocalPortDetails } from "./_LocalPortDetails";
import { _RemoteIpDetails } from "./_RemoteIpDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PortProbeDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LocalPortDetails: {
      shape: _LocalPortDetails,
      locationName: "localPortDetails"
    },
    RemoteIpDetails: {
      shape: _RemoteIpDetails,
      locationName: "remoteIpDetails"
    }
  }
};
