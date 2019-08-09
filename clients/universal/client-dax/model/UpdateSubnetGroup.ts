import { UpdateSubnetGroupInput } from "./UpdateSubnetGroupInput";
import { UpdateSubnetGroupOutput } from "./UpdateSubnetGroupOutput";
import { SubnetGroupNotFoundFault } from "./SubnetGroupNotFoundFault";
import { SubnetQuotaExceededFault } from "./SubnetQuotaExceededFault";
import { SubnetInUse } from "./SubnetInUse";
import { InvalidSubnet } from "./InvalidSubnet";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSubnetGroupInput
  },
  output: {
    shape: UpdateSubnetGroupOutput
  },
  errors: [
    {
      shape: SubnetGroupNotFoundFault
    },
    {
      shape: SubnetQuotaExceededFault
    },
    {
      shape: SubnetInUse
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: ServiceLinkedRoleNotFoundFault
    }
  ]
};
