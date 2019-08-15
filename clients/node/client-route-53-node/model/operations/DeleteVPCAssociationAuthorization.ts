import { DeleteVPCAssociationAuthorizationInput } from "../shapes/DeleteVPCAssociationAuthorizationInput";
import { DeleteVPCAssociationAuthorizationOutput } from "../shapes/DeleteVPCAssociationAuthorizationOutput";
import { ConcurrentModification } from "../shapes/ConcurrentModification";
import { VPCAssociationAuthorizationNotFound } from "../shapes/VPCAssociationAuthorizationNotFound";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { InvalidVPCId } from "../shapes/InvalidVPCId";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVPCAssociationAuthorization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVPCAssociationAuthorization",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/hostedzone/{Id}/deauthorizevpcassociation"
  },
  input: {
    shape: DeleteVPCAssociationAuthorizationInput,
    locationName: "DeleteVPCAssociationAuthorizationRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: DeleteVPCAssociationAuthorizationOutput
  },
  errors: [
    {
      shape: ConcurrentModification
    },
    {
      shape: VPCAssociationAuthorizationNotFound
    },
    {
      shape: NoSuchHostedZone
    },
    {
      shape: InvalidVPCId
    },
    {
      shape: InvalidInput
    }
  ]
};
