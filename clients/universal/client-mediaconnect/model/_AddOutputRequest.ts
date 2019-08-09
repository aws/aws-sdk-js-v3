import { ___listOf__string } from "./___listOf__string";
import { _Encryption } from "./_Encryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AddOutputRequest: _Structure_ = {
  type: "structure",
  required: ["Protocol"],
  members: {
    CidrAllowList: {
      shape: ___listOf__string,
      locationName: "cidrAllowList"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Destination: {
      shape: {
        type: "string"
      },
      locationName: "destination"
    },
    Encryption: {
      shape: _Encryption,
      locationName: "encryption"
    },
    MaxLatency: {
      shape: {
        type: "integer"
      },
      locationName: "maxLatency"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Port: {
      shape: {
        type: "integer"
      },
      locationName: "port"
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
