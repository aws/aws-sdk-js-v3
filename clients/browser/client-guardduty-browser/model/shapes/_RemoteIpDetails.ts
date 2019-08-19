import { _City } from "./_City";
import { _Country } from "./_Country";
import { _GeoLocation } from "./_GeoLocation";
import { _Organization } from "./_Organization";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RemoteIpDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    City: {
      shape: _City,
      locationName: "city"
    },
    Country: {
      shape: _Country,
      locationName: "country"
    },
    GeoLocation: {
      shape: _GeoLocation,
      locationName: "geoLocation"
    },
    IpAddressV4: {
      shape: {
        type: "string"
      },
      locationName: "ipAddressV4"
    },
    Organization: {
      shape: _Organization,
      locationName: "organization"
    }
  }
};
