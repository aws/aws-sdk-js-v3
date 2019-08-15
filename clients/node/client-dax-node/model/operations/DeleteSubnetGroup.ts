import { DeleteSubnetGroupInput } from "../shapes/DeleteSubnetGroupInput";
import { DeleteSubnetGroupOutput } from "../shapes/DeleteSubnetGroupOutput";
import { SubnetGroupInUseFault } from "../shapes/SubnetGroupInUseFault";
import { SubnetGroupNotFoundFault } from "../shapes/SubnetGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSubnetGroupInput
  },
  output: {
    shape: DeleteSubnetGroupOutput
  },
  errors: [
    {
      shape: SubnetGroupInUseFault
    },
    {
      shape: SubnetGroupNotFoundFault
    },
    {
      shape: ServiceLinkedRoleNotFoundFault
    }
  ]
};
