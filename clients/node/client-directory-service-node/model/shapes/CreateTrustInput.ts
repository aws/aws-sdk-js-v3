import { _DnsIpAddrs } from "./_DnsIpAddrs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrustInput: _Structure_ = {
  type: "structure",
  required: [
    "DirectoryId",
    "RemoteDomainName",
    "TrustPassword",
    "TrustDirection"
  ],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    RemoteDomainName: {
      shape: {
        type: "string"
      }
    },
    TrustPassword: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    TrustDirection: {
      shape: {
        type: "string"
      }
    },
    TrustType: {
      shape: {
        type: "string"
      }
    },
    ConditionalForwarderIpAddrs: {
      shape: _DnsIpAddrs
    },
    SelectiveAuth: {
      shape: {
        type: "string"
      }
    }
  }
};
