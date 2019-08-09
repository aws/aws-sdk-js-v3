import { ModifyClusterIamRolesInput } from "./ModifyClusterIamRolesInput";
import { ModifyClusterIamRolesOutput } from "./ModifyClusterIamRolesOutput";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyClusterIamRoles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyClusterIamRoles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyClusterIamRolesInput
  },
  output: {
    shape: ModifyClusterIamRolesOutput,
    resultWrapper: "ModifyClusterIamRolesResult"
  },
  errors: [
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: ClusterNotFoundFault
    }
  ]
};
