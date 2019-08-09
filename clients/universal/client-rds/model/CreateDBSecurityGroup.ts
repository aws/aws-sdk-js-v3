import { CreateDBSecurityGroupInput } from "./CreateDBSecurityGroupInput";
import { CreateDBSecurityGroupOutput } from "./CreateDBSecurityGroupOutput";
import { DBSecurityGroupAlreadyExistsFault } from "./DBSecurityGroupAlreadyExistsFault";
import { DBSecurityGroupQuotaExceededFault } from "./DBSecurityGroupQuotaExceededFault";
import { DBSecurityGroupNotSupportedFault } from "./DBSecurityGroupNotSupportedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
