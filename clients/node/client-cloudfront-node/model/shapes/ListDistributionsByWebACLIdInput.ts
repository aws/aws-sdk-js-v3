import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDistributionsByWebACLIdInput: _Structure_ = {
  type: "structure",
  required: ["WebACLId"],
  members: {
    Marker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Marker"
    },
    MaxItems: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MaxItems"
    },
    WebACLId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "WebACLId"
    }
  }
};
