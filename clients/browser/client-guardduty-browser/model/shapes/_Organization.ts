import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Organization: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Asn: {
      shape: {
        type: "string"
      },
      locationName: "asn"
    },
    AsnOrg: {
      shape: {
        type: "string"
      },
      locationName: "asnOrg"
    },
    Isp: {
      shape: {
        type: "string"
      },
      locationName: "isp"
    },
    Org: {
      shape: {
        type: "string"
      },
      locationName: "org"
    }
  }
};
