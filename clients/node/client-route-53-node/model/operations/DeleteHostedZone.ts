import { DeleteHostedZoneInput } from "../shapes/DeleteHostedZoneInput";
import { DeleteHostedZoneOutput } from "../shapes/DeleteHostedZoneOutput";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { HostedZoneNotEmpty } from "../shapes/HostedZoneNotEmpty";
import { PriorRequestNotComplete } from "../shapes/PriorRequestNotComplete";
import { InvalidInput } from "../shapes/InvalidInput";
import { InvalidDomainName } from "../shapes/InvalidDomainName";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteHostedZone: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteHostedZone",
  http: {
    method: "DELETE",
    requestUri: "/2013-04-01/hostedzone/{Id}"
  },
  input: {
    shape: DeleteHostedZoneInput
  },
  output: {
    shape: DeleteHostedZoneOutput
  },
  errors: [
    {
      shape: NoSuchHostedZone
    },
    {
      shape: HostedZoneNotEmpty
    },
    {
      shape: PriorRequestNotComplete
    },
    {
      shape: InvalidInput
    },
    {
      shape: InvalidDomainName
    }
  ]
};
