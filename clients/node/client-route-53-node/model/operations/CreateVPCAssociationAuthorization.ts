import { CreateVPCAssociationAuthorizationInput } from "../shapes/CreateVPCAssociationAuthorizationInput";
import { CreateVPCAssociationAuthorizationOutput } from "../shapes/CreateVPCAssociationAuthorizationOutput";
import { ConcurrentModification } from "../shapes/ConcurrentModification";
import { TooManyVPCAssociationAuthorizations } from "../shapes/TooManyVPCAssociationAuthorizations";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { InvalidVPCId } from "../shapes/InvalidVPCId";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVPCAssociationAuthorization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVPCAssociationAuthorization",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/hostedzone/{Id}/authorizevpcassociation"
  },
  input: {
    shape: CreateVPCAssociationAuthorizationInput,
    locationName: "CreateVPCAssociationAuthorizationRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: CreateVPCAssociationAuthorizationOutput
  },
  errors: [
    {
      shape: ConcurrentModification
    },
    {
      shape: TooManyVPCAssociationAuthorizations
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
