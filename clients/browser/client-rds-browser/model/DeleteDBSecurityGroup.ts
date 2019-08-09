import { DeleteDBSecurityGroupInput } from "./DeleteDBSecurityGroupInput";
import { DeleteDBSecurityGroupOutput } from "./DeleteDBSecurityGroupOutput";
import { InvalidDBSecurityGroupStateFault } from "./InvalidDBSecurityGroupStateFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
