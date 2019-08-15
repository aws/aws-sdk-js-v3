import { _Ipv4AddressList } from "./_Ipv4AddressList";
import { _Tags } from "./_Tags";
import { _NetworkInterfaces } from "./_NetworkInterfaces";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssetAttributes: _Structure_ = {
  type: "structure",
  required: ["schemaVersion"],
  members: {
    schemaVersion: {
      shape: {
        type: "integer"
      }
    },
    agentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    autoScalingGroup: {
      shape: {
        type: "string",
        min: 1
      }
    },
    amiId: {
      shape: {
        type: "string"
      }
    },
    hostname: {
      shape: {
        type: "string"
      }
    },
    ipv4Addresses: {
      shape: _Ipv4AddressList
    },
    tags: {
      shape: _Tags
    },
    networkInterfaces: {
      shape: _NetworkInterfaces
    }
  }
};
