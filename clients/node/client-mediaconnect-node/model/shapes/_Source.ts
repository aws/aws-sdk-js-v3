import { _Encryption } from "./_Encryption";
import { _Transport } from "./_Transport";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Source: _Structure_ = {
  type: "structure",
  required: ["SourceArn", "Name"],
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
    IngestIp: {
      shape: {
        type: "string"
      },
      locationName: "ingestIp"
    },
    IngestPort: {
      shape: {
        type: "integer"
      },
      locationName: "ingestPort"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    SourceArn: {
      shape: {
        type: "string"
      },
      locationName: "sourceArn"
    },
    Transport: {
      shape: _Transport,
      locationName: "transport"
    },
    WhitelistCidr: {
      shape: {
        type: "string"
      },
      locationName: "whitelistCidr"
    }
  }
};
