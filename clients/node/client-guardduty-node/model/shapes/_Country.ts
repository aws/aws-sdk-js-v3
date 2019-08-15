import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Country: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CountryCode: {
      shape: {
        type: "string"
      },
      locationName: "countryCode"
    },
    CountryName: {
      shape: {
        type: "string"
      },
      locationName: "countryName"
    }
  }
};
