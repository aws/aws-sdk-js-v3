import { _ClientVpnEndpointStatus } from "./_ClientVpnEndpointStatus";
import { _ValueStringList } from "./_ValueStringList";
import { _AssociatedTargetNetworkSet } from "./_AssociatedTargetNetworkSet";
import { _ClientVpnAuthenticationList } from "./_ClientVpnAuthenticationList";
import { _ConnectionLogResponseOptions } from "./_ConnectionLogResponseOptions";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClientVpnEndpoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      },
      locationName: "clientVpnEndpointId"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Status: {
      shape: _ClientVpnEndpointStatus,
      locationName: "status"
    },
    CreationTime: {
      shape: {
        type: "string"
      },
      locationName: "creationTime"
    },
    DeletionTime: {
      shape: {
        type: "string"
      },
      locationName: "deletionTime"
    },
    DnsName: {
      shape: {
        type: "string"
      },
      locationName: "dnsName"
    },
    ClientCidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "clientCidrBlock"
    },
    DnsServers: {
      shape: _ValueStringList,
      locationName: "dnsServer"
    },
    SplitTunnel: {
      shape: {
        type: "boolean"
      },
      locationName: "splitTunnel"
    },
    VpnProtocol: {
      shape: {
        type: "string"
      },
      locationName: "vpnProtocol"
    },
    TransportProtocol: {
      shape: {
        type: "string"
      },
      locationName: "transportProtocol"
    },
    AssociatedTargetNetworks: {
      shape: _AssociatedTargetNetworkSet,
      locationName: "associatedTargetNetwork"
    },
    ServerCertificateArn: {
      shape: {
        type: "string"
      },
      locationName: "serverCertificateArn"
    },
    AuthenticationOptions: {
      shape: _ClientVpnAuthenticationList,
      locationName: "authenticationOptions"
    },
    ConnectionLogOptions: {
      shape: _ConnectionLogResponseOptions,
      locationName: "connectionLogOptions"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
