import { CreateDBSubnetGroupInput } from "./CreateDBSubnetGroupInput";
import { CreateDBSubnetGroupOutput } from "./CreateDBSubnetGroupOutput";
import { DBSubnetGroupAlreadyExistsFault } from "./DBSubnetGroupAlreadyExistsFault";
import { DBSubnetGroupQuotaExceededFault } from "./DBSubnetGroupQuotaExceededFault";
import { DBSubnetQuotaExceededFault } from "./DBSubnetQuotaExceededFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
