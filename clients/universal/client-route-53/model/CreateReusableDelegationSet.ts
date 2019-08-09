import { CreateReusableDelegationSetInput } from "./CreateReusableDelegationSetInput";
import { CreateReusableDelegationSetOutput } from "./CreateReusableDelegationSetOutput";
import { DelegationSetAlreadyCreated } from "./DelegationSetAlreadyCreated";
import { LimitsExceeded } from "./LimitsExceeded";
import { HostedZoneNotFound } from "./HostedZoneNotFound";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidInput } from "./InvalidInput";
import { DelegationSetNotAvailable } from "./DelegationSetNotAvailable";
import { DelegationSetAlreadyReusable } from "./DelegationSetAlreadyReusable";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
