import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchAvailablePhoneNumbersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AreaCode: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "area-code"
    },
    City: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "city"
    },
    Country: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "country"
    },
    State: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "state"
    },
    TollFreePrefix: {
      shape: {
        type: "string",
        min: 3
      },
      location: "querystring",
      locationName: "toll-free-prefix"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "max-results"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "next-token"
    }
  }
};
