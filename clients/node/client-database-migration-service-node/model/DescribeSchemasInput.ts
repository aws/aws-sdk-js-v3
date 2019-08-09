import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSchemasInput: _Structure_ = {
  type: "structure",
  required: ["EndpointArn"],
  members: {
    EndpointArn: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
