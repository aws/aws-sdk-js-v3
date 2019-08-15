import { ListVPCAssociationAuthorizationsInput } from "../shapes/ListVPCAssociationAuthorizationsInput";
import { ListVPCAssociationAuthorizationsOutput } from "../shapes/ListVPCAssociationAuthorizationsOutput";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { InvalidInput } from "../shapes/InvalidInput";
import { InvalidPaginationToken } from "../shapes/InvalidPaginationToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListVPCAssociationAuthorizations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVPCAssociationAuthorizations",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/hostedzone/{Id}/authorizevpcassociation"
  },
  input: {
    shape: ListVPCAssociationAuthorizationsInput
  },
  output: {
    shape: ListVPCAssociationAuthorizationsOutput
  },
  errors: [
    {
      shape: NoSuchHostedZone
    },
    {
      shape: InvalidInput
    },
    {
      shape: InvalidPaginationToken
    }
  ]
};
