import { AssociateVPCWithHostedZoneInput } from "../shapes/AssociateVPCWithHostedZoneInput";
import { AssociateVPCWithHostedZoneOutput } from "../shapes/AssociateVPCWithHostedZoneOutput";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidVPCId } from "../shapes/InvalidVPCId";
import { InvalidInput } from "../shapes/InvalidInput";
import { PublicZoneVPCAssociation } from "../shapes/PublicZoneVPCAssociation";
import { ConflictingDomainExists } from "../shapes/ConflictingDomainExists";
import { LimitsExceeded } from "../shapes/LimitsExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateVPCWithHostedZone: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateVPCWithHostedZone",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/hostedzone/{Id}/associatevpc"
  },
  input: {
    shape: AssociateVPCWithHostedZoneInput,
    locationName: "AssociateVPCWithHostedZoneRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: AssociateVPCWithHostedZoneOutput
  },
  errors: [
    {
      shape: NoSuchHostedZone
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidVPCId
    },
    {
      shape: InvalidInput
    },
    {
      shape: PublicZoneVPCAssociation
    },
    {
      shape: ConflictingDomainExists
    },
    {
      shape: LimitsExceeded
    }
  ]
};
