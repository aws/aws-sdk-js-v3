import { ListResourceRecordSetsInput } from "../shapes/ListResourceRecordSetsInput";
import { ListResourceRecordSetsOutput } from "../shapes/ListResourceRecordSetsOutput";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResourceRecordSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResourceRecordSets",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/hostedzone/{Id}/rrset"
  },
  input: {
    shape: ListResourceRecordSetsInput
  },
  output: {
    shape: ListResourceRecordSetsOutput
  },
  errors: [
    {
      shape: NoSuchHostedZone
    },
    {
      shape: InvalidInput
    }
  ]
};
