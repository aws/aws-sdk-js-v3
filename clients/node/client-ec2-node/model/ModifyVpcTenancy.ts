import { ModifyVpcTenancyInput } from "./ModifyVpcTenancyInput";
import { ModifyVpcTenancyOutput } from "./ModifyVpcTenancyOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyVpcTenancy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyVpcTenancy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyVpcTenancyInput
  },
  output: {
    shape: ModifyVpcTenancyOutput
  },
  errors: []
};
