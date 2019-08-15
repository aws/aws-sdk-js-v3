import { _ClientVpnAuthenticationRequestList } from "./_ClientVpnAuthenticationRequestList";
import { _ConnectionLogOptions } from "./_ConnectionLogOptions";
import { _ValueStringList } from "./_ValueStringList";
import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClientVpnEndpointInput: _Structure_ = {
  type: "structure",
  required: [
    "ClientCidrBlock",
    "ServerCertificateArn",
    "AuthenticationOptions",
    "ConnectionLogOptions"
  ],
  members: {
    ClientCidrBlock: {
      shape: {
        type: "string"
      }
    },
    ServerCertificateArn: {
      shape: {
        type: "string"
      }
    },
    AuthenticationOptions: {
      shape: _ClientVpnAuthenticationRequestList,
      locationName: "Authentication"
    },
    ConnectionLogOptions: {
      shape: _ConnectionLogOptions
    },
    DnsServers: {
      shape: _ValueStringList
    },
    TransportProtocol: {
      shape: {
        type: "string"
      }
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
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    TagSpecifications: {
      shape: _TagSpecificationList,
      locationName: "TagSpecification"
    }
  }
};
