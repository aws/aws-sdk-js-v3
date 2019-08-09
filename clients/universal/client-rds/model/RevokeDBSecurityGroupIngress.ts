import { RevokeDBSecurityGroupIngressInput } from "./RevokeDBSecurityGroupIngressInput";
import { RevokeDBSecurityGroupIngressOutput } from "./RevokeDBSecurityGroupIngressOutput";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { InvalidDBSecurityGroupStateFault } from "./InvalidDBSecurityGroupStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RevokeDBSecurityGroupIngress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeDBSecurityGroupIngress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RevokeDBSecurityGroupIngressInput
  },
  output: {
    shape: RevokeDBSecurityGroupIngressOutput,
    resultWrapper: "RevokeDBSecurityGroupIngressResult"
  },
  errors: [
    {
      shape: DBSecurityGroupNotFoundFault
    },
    {
      shape: AuthorizationNotFoundFault
    },
    {
      shape: InvalidDBSecurityGroupStateFault
    }
  ]
};
