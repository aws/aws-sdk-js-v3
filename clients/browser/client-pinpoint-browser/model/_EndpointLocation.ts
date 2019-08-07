import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    City: {
      shape: {
        type: "string"
      }
    },
    Country: {
      shape: {
        type: "string"
      }
    },
    Latitude: {
      shape: {
        type: "float"
      }
    },
    Longitude: {
      shape: {
        type: "float"
      }
    },
    PostalCode: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    }
  }
};
