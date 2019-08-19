import { GetGeoLocationInput } from "../shapes/GetGeoLocationInput";
import { GetGeoLocationOutput } from "../shapes/GetGeoLocationOutput";
import { NoSuchGeoLocation } from "../shapes/NoSuchGeoLocation";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetGeoLocation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGeoLocation",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/geolocation"
  },
  input: {
    shape: GetGeoLocationInput
  },
  output: {
    shape: GetGeoLocationOutput
  },
  errors: [
    {
      shape: NoSuchGeoLocation
    },
    {
      shape: InvalidInput
    }
  ]
};
