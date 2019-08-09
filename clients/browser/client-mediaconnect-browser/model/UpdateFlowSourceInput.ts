import { _UpdateEncryption } from "./_UpdateEncryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFlowSourceInput: _Structure_ = {
  type: "structure",
  required: ["FlowArn", "SourceArn"],
  members: {
    Decryption: {
      shape: _UpdateEncryption,
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
    FlowArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "flowArn"
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
    Protocol: {
      shape: {
        type: "string"
      },
      locationName: "protocol"
    },
    SourceArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "sourceArn"
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
