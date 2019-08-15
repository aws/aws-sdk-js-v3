import { ModifyDBSubnetGroupInput } from "../shapes/ModifyDBSubnetGroupInput";
import { ModifyDBSubnetGroupOutput } from "../shapes/ModifyDBSubnetGroupOutput";
import { DBSubnetGroupNotFoundFault } from "../shapes/DBSubnetGroupNotFoundFault";
import { DBSubnetQuotaExceededFault } from "../shapes/DBSubnetQuotaExceededFault";
import { SubnetAlreadyInUse } from "../shapes/SubnetAlreadyInUse";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "../shapes/DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyDBSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyDBSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyDBSubnetGroupInput
  },
  output: {
    shape: ModifyDBSubnetGroupOutput,
    resultWrapper: "ModifyDBSubnetGroupResult"
  },
  errors: [
    {
      shape: DBSubnetGroupNotFoundFault
    },
    {
      shape: DBSubnetQuotaExceededFault
    },
    {
      shape: SubnetAlreadyInUse
    },
    {
      shape: DBSubnetGroupDoesNotCoverEnoughAZs
    },
    {
      shape: InvalidSubnet
    }
  ]
};
