import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Transport: _Structure_ = {
  type: "structure",
  required: ["Protocol"],
  members: {
    CidrAllowList: {
      shape: ___listOf__string,
      locationName: "cidrAllowList"
    },
    MaxBitrate: {
      shape: {
        type: "integer"
      },
      locationName: "maxBitrate"
    },
    MaxLatency: {
      shape: {
        type: "integer"
      },
      locationName: "maxLatency"
    },
    Protocol: {
      shape: {
        type: "string"
      },
      locationName: "protocol"
    },
    RemoteId: {
      shape: {
        type: "string"
      },
      locationName: "remoteId"
    },
    SmoothingLatency: {
      shape: {
        type: "integer"
      },
      locationName: "smoothingLatency"
    },
    StreamId: {
      shape: {
        type: "string"
      },
      locationName: "streamId"
    }
  }
};
