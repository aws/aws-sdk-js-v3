import { _RouteFilterPrefixList } from "./_RouteFilterPrefixList";
import { _BGPPeerList } from "./_BGPPeerList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualInterface: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ownerAccount: {
      shape: {
        type: "string"
      }
    },
    virtualInterfaceId: {
      shape: {
        type: "string"
      }
    },
    location: {
      shape: {
        type: "string"
      }
    },
    connectionId: {
      shape: {
        type: "string"
      }
    },
    virtualInterfaceType: {
      shape: {
        type: "string"
      }
    },
    virtualInterfaceName: {
      shape: {
        type: "string"
      }
    },
    vlan: {
      shape: {
        type: "integer"
      }
    },
    asn: {
      shape: {
        type: "integer"
      }
    },
    amazonSideAsn: {
      shape: {
        type: "integer"
      }
    },
    authKey: {
      shape: {
        type: "string"
      }
    },
    amazonAddress: {
      shape: {
        type: "string"
      }
    },
    customerAddress: {
      shape: {
        type: "string"
      }
    },
    addressFamily: {
      shape: {
        type: "string"
      }
    },
    virtualInterfaceState: {
      shape: {
        type: "string"
      }
    },
    customerRouterConfig: {
      shape: {
        type: "string"
      }
    },
    mtu: {
      shape: {
        type: "integer"
      }
    },
    jumboFrameCapable: {
      shape: {
        type: "boolean"
      }
    },
    virtualGatewayId: {
      shape: {
        type: "string"
      }
    },
    directConnectGatewayId: {
      shape: {
        type: "string"
      }
    },
    routeFilterPrefixes: {
      shape: _RouteFilterPrefixList
    },
    bgpPeers: {
      shape: _BGPPeerList
    },
    region: {
      shape: {
        type: "string"
      }
    },
    awsDeviceV2: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
