import { UpdateSubnetGroupInput } from "../shapes/UpdateSubnetGroupInput";
import { UpdateSubnetGroupOutput } from "../shapes/UpdateSubnetGroupOutput";
import { SubnetGroupNotFoundFault } from "../shapes/SubnetGroupNotFoundFault";
import { SubnetQuotaExceededFault } from "../shapes/SubnetQuotaExceededFault";
import { SubnetInUse } from "../shapes/SubnetInUse";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
