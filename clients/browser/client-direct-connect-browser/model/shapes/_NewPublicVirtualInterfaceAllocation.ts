import { _RouteFilterPrefixList } from "./_RouteFilterPrefixList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NewPublicVirtualInterfaceAllocation: _Structure_ = {
  type: "structure",
  required: ["virtualInterfaceName", "vlan", "asn"],
  members: {
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
    routeFilterPrefixes: {
      shape: _RouteFilterPrefixList
    },
    tags: {
      shape: _TagList
    }
  }
};
