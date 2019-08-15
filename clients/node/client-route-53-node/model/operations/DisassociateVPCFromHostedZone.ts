import { DisassociateVPCFromHostedZoneInput } from "../shapes/DisassociateVPCFromHostedZoneInput";
import { DisassociateVPCFromHostedZoneOutput } from "../shapes/DisassociateVPCFromHostedZoneOutput";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { InvalidVPCId } from "../shapes/InvalidVPCId";
import { VPCAssociationNotFound } from "../shapes/VPCAssociationNotFound";
import { LastVPCAssociation } from "../shapes/LastVPCAssociation";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateVPCFromHostedZone: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateVPCFromHostedZone",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/hostedzone/{Id}/disassociatevpc"
  },
  input: {
    shape: DisassociateVPCFromHostedZoneInput,
    locationName: "DisassociateVPCFromHostedZoneRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: DisassociateVPCFromHostedZoneOutput
  },
  errors: [
    {
      shape: NoSuchHostedZone
    },
    {
      shape: InvalidVPCId
    },
    {
      shape: VPCAssociationNotFound
    },
    {
      shape: LastVPCAssociation
    },
    {
      shape: InvalidInput
    }
  ]
};
