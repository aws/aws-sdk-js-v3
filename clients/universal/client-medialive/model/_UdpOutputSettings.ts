import { _UdpContainerSettings } from "./_UdpContainerSettings";
import { _OutputLocationRef } from "./_OutputLocationRef";
import { _FecOutputSettings } from "./_FecOutputSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UdpOutputSettings: _Structure_ = {
  type: "structure",
  required: ["Destination", "ContainerSettings"],
  members: {
    BufferMsec: {
      shape: {
        type: "integer"
      },
      locationName: "bufferMsec"
    },
    ContainerSettings: {
      shape: _UdpContainerSettings,
      locationName: "containerSettings"
    },
    Destination: {
      shape: _OutputLocationRef,
      locationName: "destination"
    },
    FecOutputSettings: {
      shape: _FecOutputSettings,
      locationName: "fecOutputSettings"
    }
  }
};
