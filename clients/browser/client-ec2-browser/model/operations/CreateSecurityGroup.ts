import { CreateSecurityGroupInput } from "../shapes/CreateSecurityGroupInput";
import { CreateSecurityGroupOutput } from "../shapes/CreateSecurityGroupOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSecurityGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSecurityGroupInput
  },
  output: {
    shape: CreateSecurityGroupOutput
  },
  errors: []
};
