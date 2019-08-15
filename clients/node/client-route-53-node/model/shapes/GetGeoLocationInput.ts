import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGeoLocationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContinentCode: {
      shape: {
        type: "string",
        min: 2
      },
      location: "querystring",
      locationName: "continentcode"
    },
    CountryCode: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "countrycode"
    },
    SubdivisionCode: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "subdivisioncode"
    }
  }
};
