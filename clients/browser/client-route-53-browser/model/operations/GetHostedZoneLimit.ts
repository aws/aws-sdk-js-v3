import { GetHostedZoneLimitInput } from "../shapes/GetHostedZoneLimitInput";
import { GetHostedZoneLimitOutput } from "../shapes/GetHostedZoneLimitOutput";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { InvalidInput } from "../shapes/InvalidInput";
import { HostedZoneNotPrivate } from "../shapes/HostedZoneNotPrivate";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetHostedZoneLimit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetHostedZoneLimit",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/hostedzonelimit/{Id}/{Type}"
  },
  input: {
    shape: GetHostedZoneLimitInput
  },
  output: {
    shape: GetHostedZoneLimitOutput
  },
  errors: [
    {
      shape: NoSuchHostedZone
    },
    {
      shape: InvalidInput
    },
    {
      shape: HostedZoneNotPrivate
    }
  ]
};
