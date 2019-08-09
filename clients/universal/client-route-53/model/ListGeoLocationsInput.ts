import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGeoLocationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StartContinentCode: {
      shape: {
        type: "string",
        min: 2
      },
      location: "querystring",
      locationName: "startcontinentcode"
    },
    StartCountryCode: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "startcountrycode"
    },
    StartSubdivisionCode: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "startsubdivisioncode"
    },
    MaxItems: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "maxitems"
    }
  }
};
