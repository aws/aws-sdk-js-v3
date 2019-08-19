import { CreateDBSecurityGroupInput } from "../shapes/CreateDBSecurityGroupInput";
import { CreateDBSecurityGroupOutput } from "../shapes/CreateDBSecurityGroupOutput";
import { DBSecurityGroupAlreadyExistsFault } from "../shapes/DBSecurityGroupAlreadyExistsFault";
import { DBSecurityGroupQuotaExceededFault } from "../shapes/DBSecurityGroupQuotaExceededFault";
import { DBSecurityGroupNotSupportedFault } from "../shapes/DBSecurityGroupNotSupportedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDBSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDBSecurityGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDBSecurityGroupInput
  },
  output: {
    shape: CreateDBSecurityGroupOutput,
    resultWrapper: "CreateDBSecurityGroupResult"
  },
  errors: [
    {
      shape: DBSecurityGroupAlreadyExistsFault
    },
    {
      shape: DBSecurityGroupQuotaExceededFault
    },
    {
      shape: DBSecurityGroupNotSupportedFault
    }
  ]
};
