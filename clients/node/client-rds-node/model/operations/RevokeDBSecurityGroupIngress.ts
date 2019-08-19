import { RevokeDBSecurityGroupIngressInput } from "../shapes/RevokeDBSecurityGroupIngressInput";
import { RevokeDBSecurityGroupIngressOutput } from "../shapes/RevokeDBSecurityGroupIngressOutput";
import { DBSecurityGroupNotFoundFault } from "../shapes/DBSecurityGroupNotFoundFault";
import { AuthorizationNotFoundFault } from "../shapes/AuthorizationNotFoundFault";
import { InvalidDBSecurityGroupStateFault } from "../shapes/InvalidDBSecurityGroupStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
