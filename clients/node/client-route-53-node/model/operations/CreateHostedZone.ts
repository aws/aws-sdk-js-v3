import { CreateHostedZoneInput } from "../shapes/CreateHostedZoneInput";
import { CreateHostedZoneOutput } from "../shapes/CreateHostedZoneOutput";
import { InvalidDomainName } from "../shapes/InvalidDomainName";
import { HostedZoneAlreadyExists } from "../shapes/HostedZoneAlreadyExists";
import { TooManyHostedZones } from "../shapes/TooManyHostedZones";
import { InvalidVPCId } from "../shapes/InvalidVPCId";
import { InvalidInput } from "../shapes/InvalidInput";
import { DelegationSetNotAvailable } from "../shapes/DelegationSetNotAvailable";
import { ConflictingDomainExists } from "../shapes/ConflictingDomainExists";
import { NoSuchDelegationSet } from "../shapes/NoSuchDelegationSet";
import { DelegationSetNotReusable } from "../shapes/DelegationSetNotReusable";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateHostedZone: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateHostedZone",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/hostedzone"
  },
  input: {
    shape: CreateHostedZoneInput,
    locationName: "CreateHostedZoneRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: CreateHostedZoneOutput
  },
  errors: [
    {
      shape: InvalidDomainName
    },
    {
      shape: HostedZoneAlreadyExists
    },
    {
      shape: TooManyHostedZones
    },
    {
      shape: InvalidVPCId
    },
    {
      shape: InvalidInput
    },
    {
      shape: DelegationSetNotAvailable
    },
    {
      shape: ConflictingDomainExists
    },
    {
      shape: NoSuchDelegationSet
    },
    {
      shape: DelegationSetNotReusable
    }
  ]
};
