import { CreateDBSubnetGroupInput } from "../shapes/CreateDBSubnetGroupInput";
import { CreateDBSubnetGroupOutput } from "../shapes/CreateDBSubnetGroupOutput";
import { DBSubnetGroupAlreadyExistsFault } from "../shapes/DBSubnetGroupAlreadyExistsFault";
import { DBSubnetGroupQuotaExceededFault } from "../shapes/DBSubnetGroupQuotaExceededFault";
import { DBSubnetQuotaExceededFault } from "../shapes/DBSubnetQuotaExceededFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "../shapes/DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDBSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDBSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDBSubnetGroupInput
  },
  output: {
    shape: CreateDBSubnetGroupOutput,
    resultWrapper: "CreateDBSubnetGroupResult"
  },
  errors: [
    {
      shape: DBSubnetGroupAlreadyExistsFault
    },
    {
      shape: DBSubnetGroupQuotaExceededFault
    },
    {
      shape: DBSubnetQuotaExceededFault
    },
    {
      shape: DBSubnetGroupDoesNotCoverEnoughAZs
    },
    {
      shape: InvalidSubnet
    }
  ]
};
