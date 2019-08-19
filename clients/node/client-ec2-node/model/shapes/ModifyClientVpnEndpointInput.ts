import { _ConnectionLogOptions } from "./_ConnectionLogOptions";
import { _DnsServersOptionsModifyStructure } from "./_DnsServersOptionsModifyStructure";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyClientVpnEndpointInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    ServerCertificateArn: {
      shape: {
        type: "string"
      }
    },
    ConnectionLogOptions: {
      shape: _ConnectionLogOptions
    },
    DnsServers: {
      shape: _DnsServersOptionsModifyStructure
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    SplitTunnel: {
      shape: {
        type: "boolean"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
