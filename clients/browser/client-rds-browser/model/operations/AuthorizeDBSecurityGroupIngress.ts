import { AuthorizeDBSecurityGroupIngressInput } from "../shapes/AuthorizeDBSecurityGroupIngressInput";
import { AuthorizeDBSecurityGroupIngressOutput } from "../shapes/AuthorizeDBSecurityGroupIngressOutput";
import { DBSecurityGroupNotFoundFault } from "../shapes/DBSecurityGroupNotFoundFault";
import { InvalidDBSecurityGroupStateFault } from "../shapes/InvalidDBSecurityGroupStateFault";
import { AuthorizationAlreadyExistsFault } from "../shapes/AuthorizationAlreadyExistsFault";
import { AuthorizationQuotaExceededFault } from "../shapes/AuthorizationQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AuthorizeDBSecurityGroupIngress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AuthorizeDBSecurityGroupIngress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AuthorizeDBSecurityGroupIngressInput
  },
  output: {
    shape: AuthorizeDBSecurityGroupIngressOutput,
    resultWrapper: "AuthorizeDBSecurityGroupIngressResult"
  },
  errors: [
    {
      shape: DBSecurityGroupNotFoundFault
    },
    {
      shape: InvalidDBSecurityGroupStateFault
    },
    {
      shape: AuthorizationAlreadyExistsFault
    },
    {
      shape: AuthorizationQuotaExceededFault
    }
  ]
};
