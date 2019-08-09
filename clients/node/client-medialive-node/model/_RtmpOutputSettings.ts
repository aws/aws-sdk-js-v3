import { _OutputLocationRef } from "./_OutputLocationRef";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RtmpOutputSettings: _Structure_ = {
  type: "structure",
  required: ["Destination"],
  members: {
    CertificateMode: {
      shape: {
        type: "string"
      },
      locationName: "certificateMode"
    },
    ConnectionRetryInterval: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "connectionRetryInterval"
    },
    Destination: {
      shape: _OutputLocationRef,
      locationName: "destination"
    },
    NumRetries: {
      shape: {
        type: "integer"
      },
      locationName: "numRetries"
    }
  }
};
