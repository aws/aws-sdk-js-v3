import { AuthorizeDBSecurityGroupIngressInput } from "./AuthorizeDBSecurityGroupIngressInput";
import { AuthorizeDBSecurityGroupIngressOutput } from "./AuthorizeDBSecurityGroupIngressOutput";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { InvalidDBSecurityGroupStateFault } from "./InvalidDBSecurityGroupStateFault";
import { AuthorizationAlreadyExistsFault } from "./AuthorizationAlreadyExistsFault";
import { AuthorizationQuotaExceededFault } from "./AuthorizationQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
