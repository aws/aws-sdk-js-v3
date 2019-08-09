import { ModifyDBSubnetGroupInput } from "./ModifyDBSubnetGroupInput";
import { ModifyDBSubnetGroupOutput } from "./ModifyDBSubnetGroupOutput";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { DBSubnetQuotaExceededFault } from "./DBSubnetQuotaExceededFault";
import { SubnetAlreadyInUse } from "./SubnetAlreadyInUse";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
