import { _Encryption } from "./_Encryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SetSourceRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Decryption: {
      shape: _Encryption,
      locationName: "decryption"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    EntitlementArn: {
      shape: {
        type: "string"
      },
      locationName: "entitlementArn"
    },
    IngestPort: {
      shape: {
        type: "integer"
      },
      locationName: "ingestPort"
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
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Protocol: {
      shape: {
        type: "string"
      },
      locationName: "protocol"
    },
    StreamId: {
      shape: {
        type: "string"
      },
      locationName: "streamId"
    },
    WhitelistCidr: {
      shape: {
        type: "string"
      },
      locationName: "whitelistCidr"
    }
  }
};
