import { ListGeoLocationsInput } from "../shapes/ListGeoLocationsInput";
import { ListGeoLocationsOutput } from "../shapes/ListGeoLocationsOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGeoLocations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGeoLocations",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/geolocations"
  },
  input: {
    shape: ListGeoLocationsInput
  },
  output: {
    shape: ListGeoLocationsOutput
  },
  errors: [
    {
      shape: InvalidInput
    }
  ]
};
