import { ListHostedZonesByNameInput } from "../shapes/ListHostedZonesByNameInput";
import { ListHostedZonesByNameOutput } from "../shapes/ListHostedZonesByNameOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { InvalidDomainName } from "../shapes/InvalidDomainName";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListHostedZonesByName: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListHostedZonesByName",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/hostedzonesbyname"
  },
  input: {
    shape: ListHostedZonesByNameInput
  },
  output: {
    shape: ListHostedZonesByNameOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: InvalidDomainName
    }
  ]
};
