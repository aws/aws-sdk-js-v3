import { ___listOf__string } from "./___listOf__string";
import { _UpdateEncryption } from "./_UpdateEncryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFlowOutputInput: _Structure_ = {
  type: "structure",
  required: ["FlowArn", "OutputArn"],
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
      shape: _UpdateEncryption,
      locationName: "encryption"
    },
    FlowArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "flowArn"
    },
    MaxLatency: {
      shape: {
        type: "integer"
      },
      locationName: "maxLatency"
    },
    OutputArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "outputArn"
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
