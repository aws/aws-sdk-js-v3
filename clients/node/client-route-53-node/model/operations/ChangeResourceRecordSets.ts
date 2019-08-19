import { ChangeResourceRecordSetsInput } from "../shapes/ChangeResourceRecordSetsInput";
import { ChangeResourceRecordSetsOutput } from "../shapes/ChangeResourceRecordSetsOutput";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { NoSuchHealthCheck } from "../shapes/NoSuchHealthCheck";
import { InvalidChangeBatch } from "../shapes/InvalidChangeBatch";
import { InvalidInput } from "../shapes/InvalidInput";
import { PriorRequestNotComplete } from "../shapes/PriorRequestNotComplete";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ChangeResourceRecordSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ChangeResourceRecordSets",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/hostedzone/{Id}/rrset/"
  },
  input: {
    shape: ChangeResourceRecordSetsInput,
    locationName: "ChangeResourceRecordSetsRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: ChangeResourceRecordSetsOutput
  },
  errors: [
    {
      shape: NoSuchHostedZone
    },
    {
      shape: NoSuchHealthCheck
    },
    {
      shape: InvalidChangeBatch
    },
    {
      shape: InvalidInput
    },
    {
      shape: PriorRequestNotComplete
    }
  ]
};
