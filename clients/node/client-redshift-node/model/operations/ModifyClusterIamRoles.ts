import { ModifyClusterIamRolesInput } from "../shapes/ModifyClusterIamRolesInput";
import { ModifyClusterIamRolesOutput } from "../shapes/ModifyClusterIamRolesOutput";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
