import { CreateReusableDelegationSetInput } from "../shapes/CreateReusableDelegationSetInput";
import { CreateReusableDelegationSetOutput } from "../shapes/CreateReusableDelegationSetOutput";
import { DelegationSetAlreadyCreated } from "../shapes/DelegationSetAlreadyCreated";
import { LimitsExceeded } from "../shapes/LimitsExceeded";
import { HostedZoneNotFound } from "../shapes/HostedZoneNotFound";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InvalidInput } from "../shapes/InvalidInput";
import { DelegationSetNotAvailable } from "../shapes/DelegationSetNotAvailable";
import { DelegationSetAlreadyReusable } from "../shapes/DelegationSetAlreadyReusable";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateReusableDelegationSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateReusableDelegationSet",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/delegationset"
  },
  input: {
    shape: CreateReusableDelegationSetInput,
    locationName: "CreateReusableDelegationSetRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: CreateReusableDelegationSetOutput
  },
  errors: [
    {
      shape: DelegationSetAlreadyCreated
    },
    {
      shape: LimitsExceeded
    },
    {
      shape: HostedZoneNotFound
    },
    {
      shape: InvalidArgument
    },
    {
      shape: InvalidInput
    },
    {
      shape: DelegationSetNotAvailable
    },
    {
      shape: DelegationSetAlreadyReusable
    }
  ]
};
