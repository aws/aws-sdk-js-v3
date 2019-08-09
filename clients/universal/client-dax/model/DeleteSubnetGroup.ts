import { DeleteSubnetGroupInput } from "./DeleteSubnetGroupInput";
import { DeleteSubnetGroupOutput } from "./DeleteSubnetGroupOutput";
import { SubnetGroupInUseFault } from "./SubnetGroupInUseFault";
import { SubnetGroupNotFoundFault } from "./SubnetGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
