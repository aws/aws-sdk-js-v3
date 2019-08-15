import { _AntennaDownlinkConfig } from "./_AntennaDownlinkConfig";
import { _AntennaDownlinkDemodDecodeConfig } from "./_AntennaDownlinkDemodDecodeConfig";
import { _AntennaUplinkConfig } from "./_AntennaUplinkConfig";
import { _DataflowEndpointConfig } from "./_DataflowEndpointConfig";
import { _TrackingConfig } from "./_TrackingConfig";
import { _UplinkEchoConfig } from "./_UplinkEchoConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigTypeData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    antennaDownlinkConfig: {
      shape: _AntennaDownlinkConfig
    },
    antennaDownlinkDemodDecodeConfig: {
      shape: _AntennaDownlinkDemodDecodeConfig
    },
    antennaUplinkConfig: {
      shape: _AntennaUplinkConfig
    },
    dataflowEndpointConfig: {
      shape: _DataflowEndpointConfig
    },
    trackingConfig: {
      shape: _TrackingConfig
    },
    uplinkEchoConfig: {
      shape: _UplinkEchoConfig
    }
  }
};
