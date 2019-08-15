import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IngestEndpoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    Password: {
      shape: {
        type: "string"
      },
      locationName: "password"
    },
    Url: {
      shape: {
        type: "string"
      },
      locationName: "url"
    },
    Username: {
      shape: {
        type: "string"
      },
      locationName: "username"
    }
  }
};
