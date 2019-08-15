import { DeleteDBSecurityGroupInput } from "../shapes/DeleteDBSecurityGroupInput";
import { DeleteDBSecurityGroupOutput } from "../shapes/DeleteDBSecurityGroupOutput";
import { InvalidDBSecurityGroupStateFault } from "../shapes/InvalidDBSecurityGroupStateFault";
import { DBSecurityGroupNotFoundFault } from "../shapes/DBSecurityGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDBSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDBSecurityGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDBSecurityGroupInput
  },
  output: {
    shape: DeleteDBSecurityGroupOutput
  },
  errors: [
    {
      shape: InvalidDBSecurityGroupStateFault
    },
    {
      shape: DBSecurityGroupNotFoundFault
    }
  ]
};
