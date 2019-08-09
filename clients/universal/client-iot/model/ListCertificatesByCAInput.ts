import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCertificatesByCAInput: _Structure_ = {
  type: "structure",
  required: ["caCertificateId"],
  members: {
    caCertificateId: {
      shape: {
        type: "string",
        min: 64
      },
      location: "uri",
      locationName: "caCertificateId"
    },
    pageSize: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "pageSize"
    },
    marker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "marker"
    },
    ascendingOrder: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "isAscendingOrder"
    }
  }
};
