import { CreateSubnetGroupInput } from "../shapes/CreateSubnetGroupInput";
import { CreateSubnetGroupOutput } from "../shapes/CreateSubnetGroupOutput";
import { SubnetGroupAlreadyExistsFault } from "../shapes/SubnetGroupAlreadyExistsFault";
import { SubnetGroupQuotaExceededFault } from "../shapes/SubnetGroupQuotaExceededFault";
import { SubnetQuotaExceededFault } from "../shapes/SubnetQuotaExceededFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSubnetGroupInput
  },
  output: {
    shape: CreateSubnetGroupOutput
  },
  errors: [
    {
      shape: SubnetGroupAlreadyExistsFault
    },
    {
      shape: SubnetGroupQuotaExceededFault
    },
    {
      shape: SubnetQuotaExceededFault
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: ServiceLinkedRoleNotFoundFault
    }
  ]
};
