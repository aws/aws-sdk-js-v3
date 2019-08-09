import { CreateSubnetGroupInput } from "./CreateSubnetGroupInput";
import { CreateSubnetGroupOutput } from "./CreateSubnetGroupOutput";
import { SubnetGroupAlreadyExistsFault } from "./SubnetGroupAlreadyExistsFault";
import { SubnetGroupQuotaExceededFault } from "./SubnetGroupQuotaExceededFault";
import { SubnetQuotaExceededFault } from "./SubnetQuotaExceededFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
