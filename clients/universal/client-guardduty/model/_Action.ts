import { _AwsApiCallAction } from "./_AwsApiCallAction";
import { _DnsRequestAction } from "./_DnsRequestAction";
import { _NetworkConnectionAction } from "./_NetworkConnectionAction";
import { _PortProbeAction } from "./_PortProbeAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Action: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActionType: {
      shape: {
        type: "string"
      },
      locationName: "actionType"
    },
    AwsApiCallAction: {
      shape: _AwsApiCallAction,
      locationName: "awsApiCallAction"
    },
    DnsRequestAction: {
      shape: _DnsRequestAction,
      locationName: "dnsRequestAction"
    },
    NetworkConnectionAction: {
      shape: _NetworkConnectionAction,
      locationName: "networkConnectionAction"
    },
    PortProbeAction: {
      shape: _PortProbeAction,
      locationName: "portProbeAction"
    }
  }
};
