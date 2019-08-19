import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWebsiteCertificateAuthoritiesInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
